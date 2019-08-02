package controller

import (
	"ahpuoj/model"
	"ahpuoj/request"
	"ahpuoj/utils"
	"database/sql"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
)

func IndexProblem(c *gin.Context) {

	pageStr := c.Query("page")
	perpageStr := c.Query("perpage")
	param := c.Query("param")
	page, _ := strconv.Atoi(pageStr)
	perpage, _ := strconv.Atoi(perpageStr)
	if page == 0 {
		page = 1
	}
	whereString := ""
	if len(param) > 0 {
		whereString += " where title like '%" + param + "%' "
	}
	whereString += " order by id desc "

	rows, total, err := model.Paginate(page, perpage, "problem", []string{"*"}, whereString)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "数据获取失败",
		})
		return
	}
	var problems []map[string]interface{}
	for rows.Next() {
		var problem model.Problem
		rows.StructScan(&problem)
		problem.FetchTags()
		problems = append(problems, map[string]interface{}{
			"id":       problem.Id,
			"title":    problem.Title,
			"accepted": problem.Accepted,
			"submit":   problem.Submit,
			"solved":   problem.Solved,
			"defunct":  problem.Defunct,
			"tags":     problem.Tags,
		})
	}
	c.JSON(200, gin.H{
		"message": "数据获取成功",
		"total":   total,
		"perpage": perpage,
		"data":    problems,
	})
}

func GetProblem(c *gin.Context) {
	var problem model.Problem
	id, _ := strconv.Atoi(c.Param("id"))
	err := DB.Get(&problem, "select * from problem where id = ?", id)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "问题不存在",
		})
		return
	}
	problem.FetchTags()

	c.JSON(200, gin.H{
		"message": "数据获取成功",
		"problem": problem.Response(),
	})
}

func StoreProblem(c *gin.Context) {
	var req request.Problem
	err := c.ShouldBindJSON(&req)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "请求参数错误",
		})
		return
	}
	problem := model.Problem{
		Title:        req.Title,
		Description:  sql.NullString{req.Description, true},
		Input:        sql.NullString{req.Input, true},
		Output:       sql.NullString{req.Output, true},
		SampleInput:  sql.NullString{req.SampleInput, true},
		SampleOutput: sql.NullString{req.SampleOutput, true},
		Spj:          req.Spj,
		Level:        req.Level,
		Hint:         sql.NullString{req.Hint, true},
		TimeLimit:    req.TimeLimit,
		MemoryLimit:  req.MemoryLimit,
	}
	err = problem.Save()
	if err != nil {
		utils.Consolelog(err)
		c.JSON(400, gin.H{
			"message": "新建问题失败，该问题已存在",
		})
		return
	}
	problem.AddTags(req.Tags)

	c.JSON(200, gin.H{
		"message": "新建问题成功",
		"problem": problem.Response(),
	})
}

func UpdateProblem(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var req request.Problem
	err := c.ShouldBindJSON(&req)
	if err != nil {
		utils.Consolelog(err)
		c.JSON(400, gin.H{
			"message": "请求参数错误",
		})
		return
	}
	problem := model.Problem{
		Id:           id,
		Title:        req.Title,
		Description:  sql.NullString{req.Description, true},
		Input:        sql.NullString{req.Input, true},
		Output:       sql.NullString{req.Output, true},
		SampleInput:  sql.NullString{req.SampleInput, true},
		SampleOutput: sql.NullString{req.SampleOutput, true},
		Spj:          req.Spj,
		Level:        req.Level,
		Hint:         sql.NullString{req.Hint, true},
		TimeLimit:    req.TimeLimit,
		MemoryLimit:  req.MemoryLimit,
	}
	// 首先清除当前标签
	problem.RemoveTags()

	err = problem.Update()
	problem.AddTags(req.Tags)
	if err != nil {
		utils.Consolelog(err)
		c.JSON(400, gin.H{
			"message": "编辑问题失败，问题标题已存在或该问题不存在",
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "编辑问题成功",
		"problem": problem.Response(),
	})
}

func DeleteProblem(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	problem := model.Problem{
		Id: id,
	}
	err := problem.Delete()
	if err != nil {
		utils.Consolelog(err)
		c.JSON(400, gin.H{
			"message": "删除问题失败，该问题不存在",
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "删除问题成功",
	})
}

func ToggleProblemStatus(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	problem := model.Problem{
		Id: id,
	}
	err := problem.ToggleStatus()
	if err != nil {
		utils.Consolelog(err)
		c.AbortWithStatusJSON(400, gin.H{
			"message": "更改问题状态失败，该问题不存在",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "更改问题状态成功",
	})
}

// 重判问题相关
func RejudgeSolution(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var temp int
	// 判断提交是否存在
	DB.Get(&temp, "select count(1) from solution where solution_id = ?", id)
	if temp == 0 {
		c.AbortWithStatusJSON(400, gin.H{
			"message": "重判提交失败，该提交不存在",
		})
		return
	}
	DB.Exec("update solution set result = 1 where solution_id = ?", id)
	c.JSON(http.StatusOK, gin.H{
		"message": "重判提交成功",
	})
}

func RejudgeProblem(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var temp int
	// 判断提交是否存在
	DB.Get(&temp, "select count(1) from problem where id = ?", id)
	if temp == 0 {
		c.AbortWithStatusJSON(400, gin.H{
			"message": "重判问题失败，该问题不存在",
		})
		return
	}
	DB.Exec("update solution set result = 1 where problem_id = ?", id)
	c.JSON(http.StatusOK, gin.H{
		"message": "重判问题成功",
	})
}

// 重排问题
func ReassignProblem(c *gin.Context) {
	// 判断原ID问题和新ID问题是否存在
	var err error
	var temp, maxId int
	oldId, _ := strconv.Atoi(c.Param("id"))
	newId, _ := strconv.Atoi(c.Param("newid"))

	DB.Get(&temp, "select count(1) from problem where id = ?", oldId)
	// 原问题不存在
	if temp == 0 {
		c.AbortWithStatusJSON(400, gin.H{
			"message": "重排问题失败，原问题不存在",
		})
		return
	}
	DB.Get(&temp, "select count(1) from problem where id = ?", newId)
	// 新ID已有问题
	if temp > 0 {
		c.AbortWithStatusJSON(400, gin.H{
			"message": "重排问题失败，新问题ID已有问题",
		})
		return
	}
	// 更改问题ID
	DB.Exec("update problem set id = ? where id = ?", newId, oldId)
	// 更新solution表
	DB.Exec("update solution set problem_id = ? where problem_id = ?", newId, oldId)
	// 更新tag关联表
	DB.Exec("update problem_tag set problem_id = ? where problem_id = ?", newId, oldId)
	// 更新issue表
	DB.Exec("update issue set problem_id = ? where problem_id = ?", newId, oldId)
	// 更新自增起始ID
	DB.Get(&maxId, "select max(id) from problem")
	DB.Exec("alter table problem auto_increment = ?", maxId)
	// 移动文件夹
	dataDir, _ := utils.GetCfg().GetValue("project", "datadir")
	oldDir := dataDir + "/" + strconv.Itoa(oldId)
	newDir := dataDir + "/" + strconv.Itoa(newId)
	err = os.Rename(oldDir, newDir)

	if err != nil {
		fmt.Println(err)
		c.AbortWithStatusJSON(400, gin.H{
			"message": "移动文件夹失败，请检查文件服务器文件权限设置",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "重排问题成功",
	})
}

func IndexProblemData(c *gin.Context) {
	var err error
	fileInfos := []map[string]interface{}{}

	id, _ := strconv.Atoi(c.Param("id"))
	dataDir, _ := utils.GetCfg().GetValue("project", "datadir")
	baseDir := dataDir + "/" + strconv.FormatInt(int64(id), 10)
	// 如果目录不存在 则创建之
	if isExist, _ := utils.PathExists(baseDir); isExist == false {
		err = os.MkdirAll(baseDir, 0777)
	}
	files, err := ioutil.ReadDir(baseDir)
	for _, file := range files {
		utils.Consolelog(file.Name())
		fileInfos = append(fileInfos, map[string]interface{}{
			"filename": file.Name(),
			"size":     file.Size(),
			"mod_time": file.ModTime().Format("2006/1/2 15:04:05"),
		})
	}

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "获取数据目录信息失败，请检查权限设置",
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "获取数据文件列表成功",
		"files":   fileInfos,
	})
}

func AddProblemData(c *gin.Context) {
	var err error
	var req request.ProblemData
	id, _ := strconv.Atoi(c.Param("id"))
	err = c.ShouldBindJSON(&req)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "请求参数错误",
		})
		return
	}

	dataDir, _ := utils.GetCfg().GetValue("project", "datadir")
	baseDir := dataDir + "/" + strconv.FormatInt(int64(id), 10)
	inFileName := baseDir + "/" + req.FileName + ".in"
	outFileName := baseDir + "/" + req.FileName + ".out"

	infos := []string{}
	_, err = os.Open(inFileName)
	if os.IsNotExist(err) {
		_, err = os.Create(inFileName)
		infos = append(infos, "文件"+req.FileName+".in"+"创建成功")
	} else {
		infos = append(infos, "文件"+req.FileName+".in"+"已经存在")
	}
	_, err = os.Open(outFileName)
	if os.IsNotExist(err) {
		_, err = os.Create(outFileName)
		infos = append(infos, "文件"+req.FileName+".out"+"创建成功")
	} else {
		infos = append(infos, "文件"+req.FileName+".out"+"已经存在")
	}

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "创建文件失败，请检查权限设置",
		})
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "操作成功",
		"info":    infos,
	})
}

func GetProblemData(c *gin.Context) {
	var err error
	id, _ := strconv.Atoi(c.Param("id"))
	filename := c.Param("filename")

	cfg := utils.GetCfg()
	dataDir, _ := cfg.GetValue("project", "datadir")
	baseDir := dataDir + "/" + strconv.FormatInt(int64(id), 10)
	filepath := baseDir + "/" + filename
	content, err := ioutil.ReadFile(filepath)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "读取数据文件失败",
		})
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "读取数据文件成功",
		"content": string(content),
	})
}

func EditProblemData(c *gin.Context) {
	var err error
	var req request.ProblemDataContent
	err = c.ShouldBindJSON(&req)
	if err != nil {
		utils.Consolelog(err)
		c.JSON(400, gin.H{
			"message": "请求参数错误",
		})
		return
	}

	id, _ := strconv.Atoi(c.Param("id"))
	filename := c.Param("filename")

	cfg := utils.GetCfg()
	dataDir, _ := cfg.GetValue("project", "datadir")
	baseDir := dataDir + "/" + strconv.FormatInt(int64(id), 10)
	filepath := baseDir + "/" + filename
	err = ioutil.WriteFile(filepath, []byte(req.Content), 0755)
	if err != nil {
		utils.Consolelog(err)
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "写入数据文件失败",
		})
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "写入数据文件成功",
	})

}

func DeleteProblemData(c *gin.Context) {
	var err error
	id, _ := strconv.Atoi(c.Param("id"))
	filename := c.Param("filename")

	cfg := utils.GetCfg()
	dataDir, _ := cfg.GetValue("project", "datadir")
	baseDir := dataDir + "/" + strconv.FormatInt(int64(id), 10)
	filepath := baseDir + "/" + filename
	err = os.Remove(filepath)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "删除文件失败",
		})
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "删除文件成功",
	})
}
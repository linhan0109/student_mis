<template>
  <el-table
    :data="tableData"
    :header-cell-style="{'text-align':'center'}"
     :cell-style="{'text-align':'center'}"
    border
    style="width: 100%">
    <el-table-column
      prop="tname"
      label="授课教师"
      width="120"></el-table-column>
      <el-table-column
      prop="courseno"
      label="课程号"
      width="130"></el-table-column>
      <el-table-column
      prop="cindex"
      label="课程序号"
      width="130"></el-table-column>
    <el-table-column
      prop="courseName"
      label="课程名"
      width="180"></el-table-column>
    <el-table-column
      prop="t_language"
      label="授课语言"
      width="130"></el-table-column>
      <el-table-column
      prop="t_year"
      label="年份"
      width="130"></el-table-column>
      <el-table-column
      prop="time"
      label="上课时间"
      width="180"></el-table-column>
    <el-table-column
      prop="place"
      label="上课地点"
      show-overflow-tooltip></el-table-column>

    
 
  </el-table>
</template>

<script>
  export default {
    data() {
      console.log(array)
      var array = JSON.parse(localStorage.getItem("teach_mes")|| '[]');
      print(array)
      return {
         tableData: array,
        // tableData: course1,
      }
    }
}
</script>
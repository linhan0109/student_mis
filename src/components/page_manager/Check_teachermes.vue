<template>
  <el-table
    :data="tableData"
    :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}"
    border
    style="width: 100%">
    <el-table-column
      prop="aname"
      label="院名"
      width="180"></el-table-column>
    <el-table-column
      prop="tno"
      label="工资号"
      width="120"></el-table-column>
    <el-table-column
      prop="tname"
      label="任课教师"
      width="120"></el-table-column>
     
      <el-table-column
      prop="tel"
      label="电话号"
      width="200"></el-table-column>
      <el-table-column
      prop="title"
      label="职称"
      width="150"></el-table-column>
    <el-table-column
      prop="place"
      label="办公地点"
      show-overflow-tooltip></el-table-column>
 
  </el-table>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
export default {
   data() {
     var array = JSON.parse(localStorage.getItem("teachermes")|| '[]');
     console.log(array)
     return {
         tableData: array,
     }
   }
}
</script>
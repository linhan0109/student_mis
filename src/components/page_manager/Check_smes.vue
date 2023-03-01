<template>
  <el-table
    :data="tableData"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
    border
    style="width: 100%">
    <el-table-column
      prop="sno"
      label="学号"
      width="120"></el-table-column>
    <el-table-column
      prop="sname"
      label="姓名"
      width="120"></el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="60"></el-table-column>
      <el-table-column
      prop="age"
      label="年龄"
      width="60"></el-table-column>
      <el-table-column
      prop="birthday"
      label="生日"
      width="180"></el-table-column>
       <el-table-column
      prop="credit"
      label="总学分"
      width="80"></el-table-column>
      <el-table-column
      prop="aname"
      label="院名"
      width="140"></el-table-column>
       <el-table-column
      prop="clname"
      label="班级"
      width="140"></el-table-column>
    <el-table-column
      prop="bname"
      label="宿舍楼"
      show-overflow-tooltip></el-table-column>
 
  </el-table>
</template>

<script>
 export default {
    data() {
      var array = JSON.parse(localStorage.getItem("check_smes")|| '[]');
      return {
         tableData: array,
      }
    }
}
</script>
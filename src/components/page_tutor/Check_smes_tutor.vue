<template>
<div class="all">
<!-- <div class="search" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
  </div> -->
    <div class="table">
  <el-table
    :data="tableData"
    height="550"
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
      prop="GPA"
      label="绩点"
      width="120"></el-table-column>
      <el-table-column
      prop="birthday"
      label="生日"
      width="180"></el-table-column>
       <el-table-column
      prop="totalCredit"
      label="总学分"
      width="80"></el-table-column>
       <el-table-column
      prop="classno"
      label="班级"
      width="140"></el-table-column>
    <el-table-column
      prop="bno"
      label="宿舍楼"
      show-overflow-tooltip></el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip></el-table-column>
  </el-table>
  </div>
  </div>
</template>

<script>
var array = JSON.parse(localStorage.getItem("main_tutor")|| '[]');
console.log(array)
  export default {
    data() {
      return {
        tableData: array
      }
    }
  }
</script>
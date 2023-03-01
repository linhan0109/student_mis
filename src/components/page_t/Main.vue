<template>
<div class="main">    
  <div class="user_pic" >
    <img src="../../assets/user1.jpg" width="20%">
    </div>    
<el-descriptions title="教师个人信息" 
                direction="vertical" :column="4" border
                :data="tableData">
                <!-- :span="2" -->
  <el-descriptions-item label="姓名" >
    <div>{{tname}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="工资号">
    <div>{{tno}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="邮箱" >
     <div>{{email}}</div>
     </el-descriptions-item>
     <el-descriptions-item label="电话号" >
     <div>{{telephone}}</div>
     </el-descriptions-item>
     <el-descriptions-item label="职称" >
     <div>{{title}}</div>
     </el-descriptions-item>
     <el-descriptions-item label="办公地址" >
     <div>{{place}}</div>
     </el-descriptions-item>
 
</el-descriptions>
</div>
</template>

<script>
export default{
  data(){
     var array = JSON.parse(localStorage.getItem("main_tea")|| '{}');
    console.log(array['id']);
    return{
      tname:array['name'],
      tno:array['id'],
      email:array['mail'],
      telephone:array['tel'],
      title:array['title'],
      place:array['building']
    }
  }
}
</script>

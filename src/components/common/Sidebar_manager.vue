<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router> 

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>查看教师信息</span>
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                        <el-menu-item index="1-1" class="el-icon-mouse" @click="check_teachmes()" >   查看教师授课信息</el-menu-item>
                        <el-menu-item index="1-2" class="el-icon-mouse" @click="check_teachermes()" >   查看教师个人信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>   

              <el-menu-item index="2" @click="check_smes()">
                <i class="el-icon-setting"></i>
                <span slot="title">查看学生信息</span>
            </el-menu-item>
            
             <el-menu-item index="3" @click="modify()">
                <i class="el-icon-setting"></i>
                <span slot="title">修改课程</span>
            </el-menu-item>

             <el-menu-item index="4" @click="approve()">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">教室申请审批</span>
            </el-menu-item>


           
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data(){
        return{
            collapse: false,
        };
    },
         created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏h
         bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
         });
    },
    methods: {
        // 查看教师个人信息
      check_teachermes(){
         var that = this
          $.ajax({
                 url:'http://127.0.0.1:5000/admin_teacherinfo',
                 data:JSON.stringify(null),
                 type:'post',
                 dataType:'json',
                 success:function(data){ //后端返回的json数据（此处data为json对象）
                 alert('正常');
              localStorage.setItem("teachermes",JSON.stringify(data));
              that.$router.push('/check_teachermes');
             },
                error:function () {
                alert('异常')
             }
             })
      },
    //   查看教师授课信息
      check_teachmes(){
          var that = this
          $.ajax({
                 url:'http://127.0.0.1:5000/admin_teaching',
                 data:JSON.stringify(null),
                 type:'post',
                 dataType:'json',
                 success:function(data){ //后端返回的json数据（此处data为json对象）
                 alert('正常');
                //  localStorage.setItem("teach_mes",JSON.stringify(data));
                 that.$router.push('/check_teachmes');
             },
                error:function () {
                alert('异常')
             }
             })
      },

    //   查看学生信息
      check_smes(){
          var that = this
          $.ajax({
                 url:'http://127.0.0.1:5000/admin_stuinfo',
                 data:JSON.stringify(null),
                 type:'post',
                 dataType:'json',
                 success:function(data){ //后端返回的json数据（此处data为json对象）
                 alert('正常');

              localStorage.setItem("check_smes",JSON.stringify(data));
              that.$router.push('/check_smes');
             },
                error:function () {
                alert('异常')
             }
             })
      },

    //   修改课程
      modify(){
           var that = this;
          $.ajax({
                 url:'http://127.0.0.1:5000/change_teaching',
                 data:JSON.stringify(null),
                 type:'post',
                 dataType:'json',
                 success:function(data){ //后端返回的json数据（此处data为json对象）
                 alert('正常');
                // console.log(data)
              localStorage.setItem("manager_modify",JSON.stringify(data));
             
            //   console.log("1111111111");
            //   that.$router.push('/modify');
              that.$router.push('/modify');

             },
                error:function () {
                alert('异常');
             }
             })
      },
       //   申请教室审批
      approve(){
           var that = this
          $.ajax({
                 url:'http://127.0.0.1:5000/view',
                 data:JSON.stringify(null),
                 type:'post',
                 dataType:'json',
                 success:function(data){ //后端返回的json数据（此处data为json对象）
                 alert('正常');
              localStorage.setItem("approve",JSON.stringify(data));
              that.$router.push('/approve');
             },
                error:function () {
                alert('异常')
             }
             })
             console.log(data)
             console.log("1111")
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>


<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
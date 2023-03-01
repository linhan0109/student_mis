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

              <el-menu-item index="1" @click="handle()">
                <i class="el-icon-setting"></i>
                <span slot="title">处理申请</span>
            </el-menu-item>

              <el-menu-item index="2" @click="check_smes_tutor()">
                <i class="el-icon-setting"></i>
                <span slot="title">查看学生信息</span>
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
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
         bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
         });
    },
    methods: {
        // 处理学生提交申请
      handle(){
          console.log("jinlaile1")
          var that = this;
          var mes = JSON.parse(localStorage.getItem("tutor_id"))
          console.log(mes)
        //   var stu = mes
          $.ajax({
              url:'http://127.0.0.1:5000/check',

              data:JSON.stringify({"teacherid":mes}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
//               alert('正常');
              localStorage.setItem("handle",JSON.stringify(data));
              console.log("hahahahahha")
              that.$router.push('/handle');
          },
          error:function () {
              alert('异常')
          }
            })
      },
    //   查看该学院学生信息
      check_smes_tutor(){
          this.$router.push('/check_smes_tutor');
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
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
              <el-menu-item index="1" @click="main()">
                <i class="el-icon-setting"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            
             <el-menu-item index="2" @click="teach()">
                <i class="el-icon-setting"></i>
                <span slot="title">授课信息</span>
            </el-menu-item>

             <el-menu-item index="3" @click="stu_grade()">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">学生成绩</span>
            </el-menu-item>


           <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span>教室信息</span>
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                        <el-menu-item index="2-1" class="el-icon-mouse" @click="classroom_mes()" >   查看教室信息</el-menu-item>
                        <el-menu-item index="2-2" class="el-icon-mouse" @click="apply()" >   申请教室</el-menu-item>
                </el-menu-item-group>
            </el-submenu>   
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
        // 教师个人信息
      main(){
          this.$router.push('/main');
      },
    //   教师授课信息
      teach(){
          var that = this;
          var mes = JSON.parse(localStorage.getItem("main_tea"))
          var stu = mes['id'];
          $.ajax({
              url:'http://127.0.0.1:5000/teaching_info',

              data:JSON.stringify({"teacherid":stu}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
              alert('正常');
              
              localStorage.setItem("teach",JSON.stringify(data));
              console.log(data)
              that.$router.push('/teach');
          },
               error:function () {
              alert('异常')
          }
            })
      },
    //   教师增删改查学生成绩
      stu_grade(){
          var that = this;
          var mes = JSON.parse(localStorage.getItem("main_tea"))
          var stu = mes['id'];
          console.log(stu)
          $.ajax({
              url:'http://127.0.0.1:5000/teaching_score',

              data:JSON.stringify({"teacherid":stu}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
              alert('正常');
              localStorage.setItem("stu_grade",JSON.stringify(data));
              console.log(data[0]['year']);
              that.$router.push('/stu_grade');
          },
               error:function () {
              alert('异常')
          }
            })
        //   this.$router.push('/stu_grade');
      },
    //   教室信息
      classroom_mes(){
          var that = this
          $.ajax({
              url:'http://127.0.0.1:5000/rooms',

//               data:JSON.stringify(null),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                var arr1 = [];
                var arr = {"room":"","1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":"","10":"","11":"","12":"","13":"","14":"","15":"","16":"","17":"","18":"","19":"","20":"","21":"","22":"","23":"","24":"","25":"","26":"","27":"","28":"","29":"","30":"","31":"","32":"","33":"","34":"","35":"","36":"","37":"","38":"","39":"","40":"","41":"","42":"","43":"","44":"","45":"","46":"","47":"","48":"","49":""}
                for(var i = 0; i < data.length; i++)
                {
                    // console.log("长度")
                    // console.log(data.length);
                    arr1[i] = arr; 
                    var temp;
                    if(data[i]['bno'] == '001')
                    {
                        temp = "YF" + data[i]['classroomno'];
                    }else{
                    temp = "SY" + data[i]['classroomno'];
                    }
                    arr1[i]['room'] = temp;
                }
                // arr1[0]['room'] = "0011220030012040201030330000004444432222000330111"
                alert('正常');
                localStorage.setItem("classroom_mes",JSON.stringify(arr1));
                localStorage.setItem("classroom_mes1",JSON.stringify(data));
                // console.log(arr1)
                that.$router.push('/classroom_mes');
          },
               error:function () {
              alert('异常')
          }
            })
        //   this.$router.push('/classroom_mes1');
      },
       //   申请教室
      apply(){
          this.$router.push('/apply');
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
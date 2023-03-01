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
            
            <el-submenu index="2" @click="classroom_mes()">
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

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-data-analysis"></i>
                    <span>学业情况</span>
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                        <el-menu-item index="2-1" class="el-icon-reading" @click="already()">   已修学分</el-menu-item>
                        <el-menu-item index="2-2" class="el-icon-data-line" @click="grade()">   学业成绩</el-menu-item>
                        <el-menu-item index="2-3" class="el-icon-tickets" @click="point()">   学期绩点</el-menu-item>
                        <el-menu-item index="2-4" class="el-icon-document" @click="forecast()">   预估绩点</el-menu-item>
                </el-menu-item-group>
            </el-submenu>   


            <el-menu-item index="4" @click="coursetable()">
                <i class="el-icon-copy-document"></i>
                <span slot="title">学生课表</span>
            </el-menu-item>

            
            <!-- <el-menu-item index="5" @click="code()">
                <i class="el-icon-lock"></i>
                <span slot="title">修改密码</span>
            </el-menu-item> -->

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
      main(){
          this.$router.push('/main');
      },
      classroom_mes(){
          var that = this
          $.ajax({
              url:'http://127.0.0.1:5000/rooms',

//               data:JSON.stringify(null),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                // console.log("/rooms")
                console.log(data)
                var arr1 = new Array(data.length);
                // console.log(data);
                // console.log(data[2]['classroomno'])
                
                for(var i = 0; i < data.length; i++)
                {
                    var arr = {"room":"","1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":"","10":"","11":"","12":"","13":"","14":"","15":"","16":"","17":"","18":"","19":"","20":"","21":"","22":"","23":"","24":"","25":"","26":"","27":"","28":"","29":"","30":"","31":"","32":"","33":"","34":"","35":"","36":"","37":"","38":"","39":"","40":"","41":"","42":"","43":"","44":"","45":"","46":"","47":"","48":"","49":""}
                    // console.log("长度")
                    console.log(data.length);
                    arr1[i] = arr; 
                    var temp;
                    if(data[i]['bno'] == '001')
                    {
                        temp = "YF" + data[i]['classroomno'];
                    }else{
                    temp = "SY" + data[i]['classroomno'];
                    }
                    console.log(temp)
                    arr1[i]['room'] = temp;
                    console.log(arr1[0]['room'])
                }
                // console.log(arr1[3]['room'])
                // arr1[0]['room'] = "0011220030012040201030330000004444432222000330111"
    //             alert('正常');
                localStorage.setItem("classroom_mes",JSON.stringify(arr1));
                localStorage.setItem("classroom_mes1",JSON.stringify(data));
                // console.log(arr1)
                that.$router.push('/classroom_mes');
          },
               error:function () {
              alert('异常')
          }
            })
            // localStorage.setItem("classroom_mes",JSON.stringify(data));
            // this.$router.push('/classroom_mes1');
      },
      apply(){
//            var that = this
//           $.ajax({
//               url:'http://127.0.0.1:5000/stu_room_require',

//               data:JSON.stringify(null),
              
//               type:'post',
//               dataType:'json',
//               success:function(data){ //后端返回的json数据（此处data为json对象）
//               localStorage.setItem("apply",JSON.stringify(data));
//               that.$router.push('/apply');
//           },
//                error:function () {
//               alert('异常')
//           }
//             })
        this.$router.push('/apply1');
      },
      coursetable(){
          var that = this;
          var mes = JSON.parse(localStorage.getItem("main_stu"))
          var stu = mes['id'];
          $.ajax({
              url:'http://127.0.0.1:5000/classes',

              data:JSON.stringify({"studentid":stu,"year":2021}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
              alert('正常');
              localStorage.setItem("coursetable",JSON.stringify(data));
              
                console.log(data);

              that.$router.push('/coursetable');
          },
               error:function () {
              alert('异常')
          }
            })
      },
      
       already(){
           var that = this;
           var mes = JSON.parse(localStorage.getItem("main_stu"))
          var stu = mes['id'];
          console.log(stu)
           $.ajax({
              url:'http://127.0.0.1:5000/credit',

              data:JSON.stringify({"sno":stu}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                    console.log(data)
                  localStorage.setItem("already",JSON.stringify(data));
                that.$router.push('/already');
          },
               error:function () {
              alert('异常')
          }
            })
        //   this.$router.push('/already');
      },
      grade(){
          var that = this;
          var mes = JSON.parse(localStorage.getItem("main_stu"))
          var stu = mes['id'];
          $.ajax({
              url:'http://127.0.0.1:5000/get_cls_grade ',

              data:JSON.stringify({"studentid":stu}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
//               alert('正常');
                // for(var i = 0; i < JSON.stringify(data).length; i++)
                // {
                //     data[i]['index'] = i;
                // }
              localStorage.setItem("grade",JSON.stringify(data));
              that.$router.push('/grade');
          },
               error:function () {
              alert('异常')
          }
            })
      },
      point(){
          var that = this;
          var mes = JSON.parse(localStorage.getItem("main_stu"))
          var stu = mes['id'];
          var that = this;
          $.ajax({
              url:'http://127.0.0.1:5000/grade',

              data:JSON.stringify({"studentid":stu}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
              alert('正常');
              localStorage.setItem("point",JSON.stringify(data));
              that.$router.push('/point');
          },
               error:function () {
              alert('异常')
          }
            })
      },
      forecast(){
//           var that = this
//           $.ajax({
//               url:'http://127.0.0.1:5000/login',

//               data:JSON.stringify(null),
              
//               type:'post',
//               dataType:'json',
//               success:function(data){ //后端返回的json数据（此处data为json对象）
//               alert('正常');
//               localStorage.setItem("forecast",JSON.stringify(data));
//               that.$router.push('/forecast');
//           },
//                error:function () {
//               alert('异常')
//           }
//             })
            this.$router.push('/forecast');
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
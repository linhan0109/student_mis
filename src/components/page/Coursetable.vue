<template>
<div class="all">
<!-- <div class="choose">
    <el-form-item style="width:100px" >
          <el-select v-model="formInline.year" placeholder="请选择学期">
          <el-option label="第一学期" value="2021"></el-option>
          <el-option label="第二学期" value="2020"></el-option>
          </el-select>
      </el-form-item>
       <el-form-item>
          <el-button type="primary" plain @click="onSubmit()">查询</el-button>
      </el-form-item>
    </div> -->

<div class="table">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
         <el-table-column
            prop="time"
            label=""
            width="130">
        </el-table-column>
        <el-table-column
            prop="Monday"
            label="星期一"
            width="180">
        </el-table-column>
        <el-table-column
             prop="Tuesday"
              label="星期二"
              width="180">
        </el-table-column>
        <el-table-column
             prop="Wednesday"
              label="星期三"
              width="180">
        </el-table-column>
        <el-table-column
             prop="Thursday"
              label="星期四"
              width="180">
        </el-table-column>
        <el-table-column
             prop="Friday"
              label="星期五"
              width="180">
        </el-table-column>
        <el-table-column
             prop="Saturday"
              label="星期六"
              width="180">
        </el-table-column>
        <el-table-column
             prop="Sunday"
              label="星期日"
              width="180">
        </el-table-column>
     </el-table>
    </div>

</div>
</template>

<script>
  console.log("进来了！！！！！")
  var array= JSON.parse(localStorage.getItem("coursetable")|| '[]');
  console.log(array)
  export default {
    data() {
      
      return {
        formInline: {
          year: ''
        },
        
        tableData:[],
        // tableData: course1,
      }
    },
    methods:{
      onSubmit: function(){
        var that = this;
        var mes = JSON.parse(localStorage.getItem("main_stu"))
        var stu = mes['sno'];
        $.ajax({
              url:'http://127.0.0.1:5000/classes',
              data:JSON.stringify({"studentid":stu,"year":this.formInline.region}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                // console.log("123123")
                var array = JSON.stringify(data);
                console.log(array)
                for(var i = 0; i < array.length; i++)
                {
                  var num = array['time'].split('-');

                  //确定格子显示内容
                }
          },
               error:function () {
              alert('异常')
          }
             })
      }
    },
    mounted: function()
    {
      console.log('home1')
      var result = [];
      // var result = {"time":[],"course":[]}; 
      var time = [{"time":"第一节  [8:00-9:50]"},{"time":"第二节  [10:10-12:00]"},{"time":"第三节  [12:10-14:00]"},{"time":"第四节  [14:10-16:00]"},{"time":"第五节  [16:20-18:10]"},{"time":"第六节  [19:00-20:50]"},{"time":"第七节  [21:00-21:50]"},]
      // var week = {"time":"","Monday":"","Tuesday":"","Wednesday":"","Thursday":"","Friday":"","Saturday":"","Sunday":""}
      // result['time'] = time;
      // for(var i = 0; i < array.length; i++)
      // {
      //   result[i] = time[i];
      // }
      // console.log(result)
      for(var j = 0; j < time.length; j++)
      {
        var week = {"time":"","Monday":"","Tuesday":"","Wednesday":"","Thursday":"","Friday":"","Saturday":"","Sunday":""}
        week['time'] = time[j]['time']
        console.log(week['time'])
        for(var i = 0; i < array.length; i++)
          {
            // console.log("123123")
            
            var num = array[i]['time'].split(' ');
            // console.log(num[1])
            // console.log(num[0])
            //在同一节课中
            if(j == 0)
            {
                if(num[1] == '第1节')
              {
                  // console.log(num[1]);
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 1)
            {
              if(num[1] == '第2节')
              {
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 2)
            {
              if(num[1] == '第3节')
              {
                
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == "星期2")
                  {

                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                    // console.log(week['Tuesday']);
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 3)
            {
              if(num[1] == '第4节')
              {
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 4)
            {
              if(num[1] == '第5节')
              {
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 5)
            {
              if(num[1] == '第6节')
              {
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            else if(j == 6)
            {
              if(num[1] == '第7节')
              {
                  if(num[0] == '星期1')
                  {
                    week['Monday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期2')
                  {
                    week['Tuesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期3'){
                    week['Wednesday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期4')
                  {
                    week['Thursday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期5'){
                    week['Friday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期6')
                  {
                    week['Saturday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
                  else if(num[0] == '星期7')
                  {
                    week['Sunday'] = array[i]['cname'] + array[i]['tname'] + array[i]['bname'] + array[i]['classroomno']
                  }
              } 
            }
            // console.log("dadadayin")
            // console.log(week)
            // result.push(week)
            // result[i] = week;
            // console.log(result)
          }
          console.log(week)
          result.push(week)
      }
      this.tableData = result
    }
  }
</script>


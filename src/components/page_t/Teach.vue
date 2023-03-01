<template>
<div class="container">
    <div class="text1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学年">
                <el-select v-model="formInline.year" placeholder="学年">
                <el-option label="总体" value="all"></el-option>
                <el-option label="2021" value="2021"></el-option>
                <el-option label="2020" value="2020"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上课地点">
                <el-input v-model="formInline.place" placeholder="上课地点"></el-input>
            </el-form-item>
           <el-form-item label="上课时间">
                <el-select v-model="formInline.time" placeholder="上课时间">
                <el-option label="星期一 第一节" value="星期一 第一节"></el-option>
                <el-option label="星期一 第二节" value="星期一 第二节"></el-option>
                <el-option label="星期一 第三节" value="星期一 第三节"></el-option>
                <el-option label="星期一 第四节" value="星期一 第四节"></el-option>
                <el-option label="星期一 第五节" value="星期一 第五节"></el-option>
                <el-option label="星期一 第六节" value="星期一 第六节"></el-option>
                <el-option label="星期一 第七节" value="星期一 第七节"></el-option>
                <el-option label="星期二 第一节" value="星期二 第一节"></el-option>
                <el-option label="星期二 第二节" value="星期二 第二节"></el-option>
                <el-option label="星期二 第三节" value="星期二 第三节"></el-option>
                <el-option label="星期二 第四节" value="星期二 第四节"></el-option>
                <el-option label="星期二 第五节" value="星期二 第五节"></el-option>
                <el-option label="星期二 第六节" value="星期二 第六节"></el-option>
                <el-option label="星期二 第七节" value="星期二 第七节"></el-option>

                <el-option label="星期三 第一节" value="星期三 第一节"></el-option>
                <el-option label="星期三 第二节" value="星期三 第二节"></el-option>
                <el-option label="星期三 第三节" value="星期三 第三节"></el-option>
                <el-option label="星期三 第四节" value="星期三 第四节"></el-option>
                <el-option label="星期三 第五节" value="星期三 第五节"></el-option>
                <el-option label="星期三 第六节" value="星期三 第六节"></el-option>
                <el-option label="星期三 第七节" value="星期三 第七节"></el-option>

                <el-option label="星期四 第一节" value="星期四 第一节"></el-option>
                <el-option label="星期四 第二节" value="星期四 第二节"></el-option>
                <el-option label="星期四 第三节" value="星期四 第三节"></el-option>
                <el-option label="星期四 第四节" value="星期四 第四节"></el-option>
                <el-option label="星期四 第五节" value="星期四 第五节"></el-option>
                <el-option label="星期四 第六节" value="星期四 第六节"></el-option>
                <el-option label="星期四 第七节" value="星期四 第七节"></el-option>
                
                <el-option label="星期五 第一节" value="星期五 第一节"></el-option>
                <el-option label="星期五 第二节" value="星期五 第二节"></el-option>
                <el-option label="星期五 第三节" value="星期五 第三节"></el-option>
                <el-option label="星期五 第四节" value="星期五 第四节"></el-option>
                <el-option label="星期五 第五节" value="星期五 第五节"></el-option>
                <el-option label="星期五 第六节" value="星期五 第六节"></el-option>
                <el-option label="星期五 第七节" value="星期五 第七节"></el-option>

                <el-option label="星期六 第一节" value="星期六 第一节"></el-option>
                <el-option label="星期六 第二节" value="星期六 第二节"></el-option>
                <el-option label="星期六 第三节" value="星期六 第三节"></el-option>
                <el-option label="星期六 第四节" value="星期六 第四节"></el-option>
                <el-option label="星期六 第五节" value="星期六 第五节"></el-option>
                <el-option label="星期六 第六节" value="星期六 第六节"></el-option>
                <el-option label="星期六 第七节" value="星期六 第七节"></el-option>
                <el-option label="星期七 第一节" value="星期七 第一节"></el-option>
                <el-option label="星期七 第二节" value="星期七 第二节"></el-option>
                <el-option label="星期七 第三节" value="星期七 第三节"></el-option>
                <el-option label="星期七 第四节" value="星期七 第四节"></el-option>
                <el-option label="星期七 第五节" value="星期七 第五节"></el-option>
                <el-option label="星期七 第六节" value="星期七 第六节"></el-option>
                <el-option label="星期七 第七节" value="星期七 第七节"></el-option>
                
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
    </div>
    <div class="text2">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="courseno"
            label="课程号"
            width="120"></el-table-column>
            <el-table-column
            prop="coursename"
            label="课程名"
            width="120"></el-table-column>
            <!-- <el-table-column
            prop="course"
            label="授课教师"
            width="130"></el-table-column> -->
            <el-table-column
            prop="time"
            label="上课时间"
            width="180"></el-table-column>
            <el-table-column
            prop="place"
            label="上课地点"
           show-overflow-tooltip></el-table-column>
        
        </el-table>
    </div>
</div>
  
</template>

<script>
    var array = JSON.parse(localStorage.getItem("teach")|| '[]');
    console.log(array)
    export default {
        data() {
        return {
            formInline: {
            year:'',
            place: '',
            time:''
            },
            tableData:array,
        }
        },
        methods: {
        onSubmit() {
           //自己查询吧1！！！！！
            var result = [];
          var number = 0;
          for(var i = 0; i < array.length; i++)
          {
            console.log(i)
            console.log(JSON.stringify(array).length)
            console.log(array[i]['year'])
            console.log("1231231")
            if(this.formInline.year == 'all' || this.formInline.year == '')
            {
              if(this.formInline.place == '')
              {
                if(this.formInline.time == '')
                {
                  result = array;
                  break;
                }
                else{
                  if(array[i]['time'] == this.formInline.time)
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
              else
              {
                //有时间
                if(this.formInline.time == '')
                {
                  if(this.formInline.place == array[i]['place'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(this.formInline.place == array[i]['place'] && this.formInline.time == array[i]['time'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
            }
            else
            {
              if(this.formInline.place == '')
              {
                if(this.formInline.time == '')
                {
                  if(parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(array[i]['time'] == this.formInline.time && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
              else
              {
                //有课程号
                if(this.formInline.time == '')
                {
                  if(this.formInline.place == array[i]['place'] && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(this.formInline.time == array[i]['time'] && this.formInline.place == array[i]['place'] && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
            }
          }
          this.tableData = result;
        }
        }
    }
//   export default {
//     data() {
//       return {
//         tableData: [{
//           num: '19301135',
//           name: '周冰萌',
//           course:'数据库实践',
//           time:'周一10：00-12：00',
//           address: '逸夫604'
//         }, {
//           num: '19301135',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1517 弄'
//         }, {
//           num: '19301135',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1519 弄'
//         }, {
//           num: '19301135',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1516 弄'
//         }]
//       }
//     }
//   }
</script>
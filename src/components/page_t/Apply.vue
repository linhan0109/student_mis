<template>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="占用教学楼">
    <el-select v-model="form.bno" placeholder="请选择活动区域">
      <el-option label="逸夫楼" value="001"></el-option>
      <el-option label="思源楼" value="002"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="占用教室">
    <el-input v-model="form.classroomno"  placeholder="教室号"></el-input>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-select v-model="form.o_week" placeholder="请选择活动的周次">
      <el-option label="第一周" value="1"></el-option>
      <el-option label="第二周" value="2"></el-option>
      <el-option label="第三周" value="3"></el-option>
      <el-option label="第四周" value="4"></el-option>
      <el-option label="第五周" value="5"></el-option>
      <el-option label="第六周" value="6"></el-option>
      <el-option label="第七周" value="7"></el-option>
      <el-option label="第八周" value="8"></el-option>
      <el-option label="第九周" value="9"></el-option>
      <el-option label="第十周" value="10"></el-option>
      <el-option label="第十一周" value="11"></el-option>
      <el-option label="第十二周" value="12"></el-option>
      <el-option label="第十三周" value="13"></el-option>
      <el-option label="第十四周" value="14"></el-option>
      <el-option label="第十五周" value="15"></el-option>
      <el-option label="第十六周" value="16"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="请选择星期">
    <el-select v-model="form.o_day" placeholder="请选择星期">
      <el-option label="星期一" value="1"></el-option>
      <el-option label="星期二" value="2"></el-option>
      <el-option label="星期三" value="3"></el-option>
      <el-option label="星期四" value="4"></el-option>
      <el-option label="星期五" value="5"></el-option>
      <el-option label="星期六" value="6"></el-option>
      <el-option label="星期日" value="7"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="请选择第几节课">
    <el-select v-model="form.o_number" placeholder="请选择第几节课">
      <el-option label="第一节课" value="1"></el-option>
      <el-option label="第二节课" value="2"></el-option>
      <el-option label="第三节课" value="3"></el-option>
      <el-option label="第四节课" value="4"></el-option>
      <el-option label="第五节课" value="5"></el-option>
      <el-option label="第六节课" value="6"></el-option>
      <el-option label="第七节课" value="7"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-select v-model="form.o_type" placeholder="请选择活动性质">
      <el-option label="排课" value="class"></el-option>
      <el-option label="实验" value="experiment"></el-option>
      <el-option label="考试" value="exam"></el-option>
      <el-option label="其他" value="other"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="申请人">
    <el-input v-model="form.send_id"></el-input>
  </el-form-item>
   <el-form-item label="申请理由">
    <el-input v-model="form.reason"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">申请</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          bno: '',
          classroomno: '',
          o_week: '',
          o_day: '',
          o_number: '',
          o_type: '',
          send_id: '',
          reason:''
        }
      }
    },
    methods: {
      onSubmit() {
        // console.log('submit!');
         var that = this;
        $.ajax({
              url:'http://127.0.0.1:5000/tcr_room_require',
              data:JSON.stringify({"name":that.form.name,"bno":that.form.bno,
                                    "classroomno":that.form.classroomno,"o_week":that.form.o_week,
                                    "o_day":that.form.o_day,"o_number":that.form.o_number,
                                    "o_type":that.form.o_type,"send_id":that.form.send_id,
                                    "reason":that.form.reason}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                console.log("成功")
          },
               error:function () {
              alert('异常')
          }
             })

      }
    }
  }
</script>
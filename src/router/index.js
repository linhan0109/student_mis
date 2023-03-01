import Vue from 'vue'
import router from 'vue-router'
import login from '@/components/login'


Vue.use(router)

export default new router({
  routes: [
    // 登录界面
    {
      path: '/',
      name: 'login',
      component: login
    },
    // 学生端主界面
    {
      path: '/home3',
      redirect: '/main'
    },

    // 普通教师端主界面
    {
      path: '/home1',
      redirect: '/main1'
    },

    // 管理员端主界面
    {
      path:'/home',
      redirect:'/check_teachmes'
    },

    // 辅导员端主界面
    {
      path:'/home2',
      redirect:'/check_smes_tutor'
    },
    
    {
      //管理员
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: { title: '自述文件' },
      

      

// 班主任端
 // children: [
      //   {
      //     // 个人信息
      //     path: '/main',
      //     component: () => import('../components/page_t/Main.vue'),
      //     meta: { title: '个人信息' }
      //   },
      //   {
      //     // 教室信息
      //     path:'/classroom_mes',
      //     component: () => import('../components/page_t/Classroom_mes.vue'),
      //     meta: { title: '教室信息' }
      //   },
      //   {
      //      // 申请教室
      //      path: '/apply',
      //      component: () => import('../components/page_t/Apply.vue'),
      //      meta: { title: '申请教室' }
      //   },
      //   {
      //     // 授课信息
      //     path:'/teach',
      //     component: () => import('../components/page_t/Teach.vue'),
      //     meta: { title: '授课信息' }
      //   },
      //   {
      //     // 学生成绩
      //     path:'/stu_grade',
      //     component: () => import('../components/page_t/Stu_grade.vue'),
      //     meta: { title: '学生成绩' }
      //   }
      // ]

      // 管理员端
      children: [
        {
          // 查看教师授课信息
          path: '/check_teachmes',
          component: () => import('../components/page_manager/Check_teachmes.vue'),
          meta: { title: '查看教师授课信息' }
        },
        {
          // 查看教师个人信息
          path:'/check_teachermes',
          component: () => import('../components/page_manager/Check_teachermes.vue'),
          meta: { title: '查看教师个人信息' }
        },
        {
           // 查看学生信息
           path: '/check_smes',
           component: () => import('../components/page_manager/Check_smes.vue'),
           meta: { title: '查看学生信息' }
        },
        {
          // 修改课程
          path:'/modify',
          component: () => import('../components/page_manager/Modify.vue'),
          meta: { title: '修改课程' }
        },
        {
          // 教室申请审批
          path:'/approve',
          component: () => import('../components/page_manager/Approve.vue'),
          meta: { title: '教室申请审批' }
        }
      ]


      



    },
    {
      //普通教师
      path:'/1',
      component: () => import('../components/common/Home1.vue'),
      meta: { title: '自述文件' },
      // 普通教师端
      children: [
        {
          // 个人信息
          path: '/main1',
          component: () => import('../components/page_t/Main.vue'),
          meta: { title: '个人信息' }
        },
        {
          // 教室信息
          path:'/classroom_mes1',
          component: () => import('../components/page_t/Classroom_mes.vue'),
          meta: { title: '教室信息' }
        },
        {
           // 申请教室
           path: '/apply',
           component: () => import('../components/page_t/Apply.vue'),
           meta: { title: '申请教室' }
        },
        {
          // 授课信息
          path:'/teach',
          component: () => import('../components/page_t/Teach.vue'),
          meta: { title: '授课信息' }
        },
        {
          // 学生成绩
          path:'/stu_grade',
          component: () => import('../components/page_t/Stu_grade.vue'),
          meta: { title: '学生成绩' }
        }
      ]
    },
    {
      //辅导员
      path:'/2',
      component: () => import('../components/common/Home2.vue'),
      meta: { title: '自述文件' },
      // 辅导员端
      children: [
        {
          // 处理申请
          path: '/handle',
          component: () => import('../components/page_tutor/Handle.vue'),
          meta: { title: '处理申请' }
        },
        {
          // 查看学生信息
          path:'/check_smes_tutor',
          component: () => import('../components/page_tutor/Check_smes_tutor.vue'),
          meta: { title: '查看学生信息' }
        }
      ]
    },
    {
      //学生端
      path:'/3',
      component: () => import('../components/common/Home3.vue'),
      meta: { title: '自述文件' },
      // 学生端
      children: [
        {
          // 个人信息
          path: '/main',
          component: () => import('../components/page/Main.vue'),
          meta: { title: '个人信息' }
        },
        {
          // 查看教室信息
          path:'/classroom_mes',
          component: () => import('../components/page/Classroom_mes.vue'),
          meta: { title: '教室信息' }
        },
        {
           // 申请教室
           path: '/apply1',
           component: () => import('../components/page/Apply.vue'),
           meta: { title: '申请教室' }
        },
          {
           // 已修学分
           path: '/already',
           component: () => import('../components/page/Already.vue'),
           meta: { title: '已修学分' }
        },
        {
           // 学业成绩
           path: '/grade',
           component: () => import('../components/page/Grade.vue'),
           meta: { title: '学业成绩' }
        },{
           // 学期绩点
           path: '/point',
           component: () => import('../components/page/Point.vue'),
           meta: { title: '学期绩点' }
        },
       {
          // 预估绩点
          path:'/forecast',
          component: () => import('../components/page/Forecast.vue'),
          meta: { title: '预估绩点' }
        },
        {
          // 学生课表
          path:'/coursetable',
          component: () => import('../components/page/Coursetable.vue'),
          meta: { title: '学生课表' }
        },
        {
          // 修改密码
          path:'/code',
          component: () => import('../components/page/Code.vue'),
          meta: { title: '修改密码' }
        }
      ]
    },
  ]

})



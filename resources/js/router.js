import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import Example from './views/Example'

import CoursesIndex from './views/courses/Index'
import CoursesCreate from './views/courses/Create'
import CoursesShow from './views/courses/Show'
import CoursesEdit from './views/courses/Edit'
import CoursesDelete from './views/courses/Delete'

import LecturersIndex from './views/lecturers/Index'
import LecturersCreate from './views/lecturers/Create'
import LecturersShow from './views/lecturers/Show'
import LecturersEdit from './views/lecturers/Edit'
import LecturersDelete from './views/lecturers/Delete'

import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsShow from './views/enrolments/Show'
import EnrolmentsEdit from './views/enrolments/Edit'
import EnrolmentsDelete from './views/enrolments/Delete'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },

    // Courses
    {
      path: '/courses',
      name: 'coursesIndex',
      component: CoursesIndex
    },
    {
      path: '/courses/create',
      name: 'coursesCreate',
      component: CoursesCreate
    },
    {
      path: '/courses/edit/:id',
      name: 'coursesEdit',
      component: CoursesEdit
    },
    {
      path: '/courses/show/:id',
      name: 'coursesShow',
      component: CoursesShow
    },
    {
      path: '/courses/delete/:id',
      name: 'coursesDelete',
      component: CoursesDelete
    },

    // Lecturers
    {
      path: '/lecturers',
      name: 'lecturersIndex',
      component: LecturersIndex
    },
    {
      path: '/lecturers/create',
      name: 'lecturersCreate',
      component: LecturersCreate
    },
    {
      path: '/lecturers/edit/:id',
      name: 'lecturersEdit',
      component: LecturersEdit
    },
    {
      path: '/lecturers/show/:id',
      name: 'lecturersShow',
      component: LecturersShow
    },
    {
      path: '/lecturers/delete/:id',
      name: 'lecturersDelete',
      component: LecturersDelete
    },

    // Enrolments
    {
      path: '/enrolments',
      name: 'enrolmentsIndex',
      component: EnrolmentsIndex
    },
    {
      path: '/enrolments/create',
      name: 'enrolmentsCreate',
      component: EnrolmentsCreate
    },
    {
      path: '/enrolments/edit/:id',
      name: 'enrolmentsEdit',
      component: EnrolmentsEdit
    },
    {
      path: '/enrolments/show/:id',
      name: 'enrolmentsShow',
      component: EnrolmentsShow
    },
    {
      path: '/enrolments/delete/:id',
      name: 'enrolmentsDelete',
      component: EnrolmentsDelete
    },
  ]
})

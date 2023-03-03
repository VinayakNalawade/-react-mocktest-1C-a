import styled from 'styled-components'

export const Home = styled.div`
  background-color: #eef4f7;
  min-height: 100vh;
  padding: 5%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeHeading = styled.h1`
  font-size: 28px;
  color: #1e293b;
  border-bottom: 1px solid #52bbf0;
`

export const CoursesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const CourseItem = styled.li`
  list-style-type: none;
  width: 48%;
  margin: 1%;
  background-color: #ffffff;
`

export const CourseItemImg = styled.img`
  width: 100%;
`

export const CourseName = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
  margin: 12px;
`
export const CoursePara = styled.p`
  margin: 12px;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 500;
  color: #64748b;
`

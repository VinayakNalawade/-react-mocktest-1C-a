import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  Home,
  HomeHeading,
  CoursesList,
  CoursePara,
  CourseItem,
  CourseItemImg,
  CourseName,
} from './styledComponents'

class TravelGuide extends Component {
  state = {isLoading: '', dataList: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const response = await fetch('https://apis.ccbp.in/tg/packages')

    const data = await response.json()

    if (response.ok) {
      const packages = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))

      this.setState({
        isLoading: 'success',
        dataList: packages,
      })
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccess = () => {
    const {dataList} = this.state

    return (
      <CoursesList>
        {dataList.map(each => (
          <CourseItem key={each.id}>
            <CourseItemImg src={each.imageUrl} alt={each.name} />
            <CourseName>{each.name}</CourseName>
            <CoursePara>{each.description}</CoursePara>
          </CourseItem>
        ))}
      </CoursesList>
    )
  }

  renderPage = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'success':
        return this.renderSuccess()
      case 'loading':
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <Home>
        <HomeHeading>Travel Guide</HomeHeading>
        {this.renderPage()}
      </Home>
    )
  }
}

export default TravelGuide

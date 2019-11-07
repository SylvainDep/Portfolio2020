import React from 'react'
import styled from 'styled-components'
import { styles } from '../UI'

const {
  uiblocks: { Grid }
} = styles;

const AboutContent = (props) => {
  return (
    <div>
      <h2>About me</h2>
      <Grid>
        <img src='../assets/img/profile.jpg'/>
        <div>
          <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper purus suscipit ultricies tincidunt. Nulla eget turpis ac leo euismod pharetra at nec diam. Etiam id purus lacus. Suspendisse ligula nulla, cursus non lacinia tincidunt, elementum eu sapien. Morbi mollis congue fringilla. Vivamus ac sagittis nunc.</p>
          <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper</p>
        </div>
      </Grid>
    </div>
  )
}

export default AboutContent

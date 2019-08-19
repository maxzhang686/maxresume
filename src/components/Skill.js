import  React from 'react';
import './main.css';
import styled from 'styled-components';

const Skill = () => 
<div id="skill">
<div class="skill-content">
  <Containerfluid>
    <Row>
      <div class="block-title">
    <h3>Code  <span>SKILL</span></h3>
      </div>
      <div class="skills-info">
          <h4>HTML5</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-9"></div>
          </div>

          <h4>CSS3/LESS/SASS</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-8"></div>
          </div>

          <h4>JavaScript</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-6"></div>
          </div>

          <h4>ReactJS</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-7"></div>
          </div>

          <h4>Git</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-8"></div>
          </div>

          <h4>AWS</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-5"></div>
          </div>

          <h4>Node.js</h4>
          <div class="skill-container">
            <div class="skill-percentage skill-4"></div>
          </div>


      </div>
    </Row>
  </Containerfluid>
</div>
</div>
export default Skill;

const Containerfluid = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    /* display:flex;
    flex-direction:row ;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap; */
    /* background-color:#ffffff3d; */
`;
const Row = styled.div`
    
    margin-right: 15px;
    margin-left: 15px;
    min-width:282px;
`;
// const Top = styled.div`
//     flex:1;
//     margin-right: 15px;
//     margin-left: 15px;
//     padding-right: 15px;
//     padding-left: 15px;
//     min-width:282px;
// `;

// const Righttop = styled.div`
//     flex:1;
//     margin-right: 15px;
//     margin-left: 15px;
//     padding-right: 15px;
//     padding-left: 15px;  
// `;
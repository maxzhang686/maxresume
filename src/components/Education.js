import React from "react";
import "./main.css";
import styled from "styled-components";

const Education = () => (
  <div id="education">
    <div class="edu-content">
      <Containerfluid>
        <Lefttop>
          <div class="edu">
            <h3>
              <strong>Education</strong>
            </h3>
            <div class="timeline">
              {/* Education 1 */}
              <div class="timeline-item">
                <h4 class="item-title">
                  Professional Year Program (Computer Science)
                </h4>
                <span class="item-period">2016-2017</span>
                <span class="item-small">QIBA Inc.</span>
                <p class="item-description">HTML5, CSS, JavaScript</p>
              </div>

              {/* Education 2 */}
              <div class="timeline-item">
                <h4 class="item-title">Bachelor of Information Technology</h4>
                <span class="item-period">2013-2016</span>
                <span class="item-small">University of Canberra.</span>
                <p class="item-description">C#, ASP.NET, Access, SQLite</p>
              </div>

              {/* Education 3 */}
              <div class="timeline-item">
                <h4 class="item-title">Diploma of Information Technologye</h4>
                <span class="item-period">2012-2013</span>
                <span class="item-small">University of Canberra.</span>
                <p class="item-description">
                  HTML, CSS, JavaScript, Web Design
                </p>
              </div>
            </div>
          </div>
        </Lefttop>

        <Righttop>
          <div class="work">
            <h3>
              <strong>Experience</strong>
            </h3>

            <div class="timeline">
              {/* Experience 4 */}
              <div class="timeline-item">
                <h4 class="item-title">Web Developer</h4>
                <span class="item-period">02/2019 - Current</span>
                <span class="item-small"> JR Academy (Sydney)</span>
                <p class="item-description">
                  ReactJS, HTML, CSS, GIT, Node.js, AWS
                </p>
              </div>

              {/* Experience 3 */}
              <div class="timeline-item">
                <h4 class="item-title">Restaurant Manager</h4>
                <span class="item-period">06/2016 - 02/2019</span>
                <span class="item-small">
                  Pepper Lunch Restaurant(Canberra)
                </span>
                <p class="item-description">
                  Set budgets and execute plans for department sales,
                  <br />
                  product purchase and staff development,
                  <br />
                  scheduling shifts
                </p>
              </div>

              {/* Experience 2 */}
              <div class="timeline-item">
                <h4 class="item-title">Frontend-developer(Internship)</h4>
                <span class="item-period">02/2016 - 05/2016</span>
                <span class="item-small">Allbids.com.au(Canberra)</span>
                <p class="item-description">HTML5, CSS, JavaScript, .Net,</p>
              </div>

              {/* Experience 1 */}
              {/* <div class="timeline-item">
                      <h4 class="item-title">xxxx</h4>
                      <span class="item-period">Jan 2019 - Current</span>
                      <span class="item-small"> Inc.</span>
                      <p class="item-description"></p>
                    </div> */}
            </div>
          </div>
        </Righttop>
      </Containerfluid>
    </div>
  </div>
);
export default Education;

const Containerfluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* background-color:#ffffff3d; */
`;
const Lefttop = styled.div`
  flex: 1;
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
  min-width: 282px;
`;

const Righttop = styled.div`
  flex: 1;
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
`;

import React from "react";
import "./main.css";
import styled from "styled-components";
// About/Home page
const About = () => (
  <div id="about">
    <div class="pt-page">
      <Containerfluid>
        <Lefttop>
          <Photo>
            <LocImg src={"./img/photo.jpg"} />
          </Photo>
        </Lefttop>
        <Righttop>
          <h1 class="text-center">Max Zhang</h1>
        </Righttop>
      </Containerfluid>

      <Containerfluidbtm>
        <Leftbtm>
          <div class="about-me">
            <div class="block-title">
              <h3>
                About <span>Me</span>
              </h3>
            </div>
            {/* <p>
            I graduated in 2016 from University of Canberra. I am equipped with essential professional skills to commence my career.
            </p> */}
            <p>
            I am currently looking for front end/full stack developer position 
            in a company where I can bring my proficiencies in website development, 
            software development and strengthen my skills. I
              am proficient using <strong>HTML, CSS, React.jS, GIT</strong> and
              learning <strong>Node.js, Docker, MongoDB</strong> recently.
            </p>
            <p>
            I want to emerge as a 
            successful, true professional through my 'Can Do’ attitude, hard work, 
            high motivation and always willing to go extra miles. 
            </p>
          </div>
        </Leftbtm>
        <Rightbtm>
          <div class="info">
            <ul class="info-list">
              {/* <!-- <li><span class="title">Age</span><span class="value">27</span></li> --> */}
              <li>
                <span class="title">Residence</span>
                <span class="value">Australia Permanent Resident</span>
              </li>
              <li>
                <span class="title">Address</span>
                <span class="value">10/1 Anthony Rolfe ave, Canberra</span>
              </li>
              <li>
                <span class="title">e-mail</span>
                <span class="value">
                  <a href="maxzhang686@gmail.com">maxzhang686@gmail.com</a>
                </span>
              </li>
              <li>
                <span class="title">Phone</span>
                <span class="value">0404 500 260</span>
              </li>
            </ul>
          </div>
        </Rightbtm>
      </Containerfluidbtm>
    </div>
  </div>
);

export default About;

const Containerfluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color:#ffffff3d; */
`;
const Lefttop = styled.div`
  flex: 1;
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
  min-width: 200px;
`;

const Righttop = styled.div`
  flex: 2;
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Photo = styled.div`
  max-width: 180px;
  margin: 0 auto;
`;

const LocImg = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
  margin: 0 auto;
  max-height: 200px;
`;

const Leftbtm = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
`;

const Rightbtm = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  padding-right: 15px;
  padding-left: 15px;
  height: 100%;
  flex: 1;
`;

const Containerfluidbtm = styled.div`
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
  padding-top: 50px;
  /* background-color:#ffffff3d; */
`;

// const Row = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin-right: 15px;
//     margin-left: 15px;
// `;

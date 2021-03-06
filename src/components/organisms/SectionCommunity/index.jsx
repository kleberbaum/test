//> React
// Contains all the functionality necessary to define React components
import React, { Fragment } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./community.scss";

//> Images
import LegnayaIMG from "../../../assets/content/community/legnaya.jpg";
import MemberIMG from "../../../assets/content/community/member.jpg";
import SebiIMG from "../../../assets/content/community/sebi.jpg";
import SnowIMG from "../../../assets/content/community/snow.jpg";
import DwixIMG from "../../../assets/content/community/dwix.jpg";
import ArtjomowitchIMG from "../../../assets/content/community/artjomowitch.jpg";

//> Data
const value = {
  admins: {
    show_admins: true,
    admins_titel: "Admins",
    members: [
      {
        value: [
          {
            value: {
              name: "Legnaya",
              description: "Teamspeak",
              pic: LegnayaIMG,
            },
          },
          {
            value: {
              name: "Member",
              description: "Teamspeak",
              pic: MemberIMG,
            },
          },
          {
            value: {
              name: "Sebi",
              description: "Teamspeak",
              pic: SebiIMG,
            },
          },
          {
            value: {
              name: "snow",
              description: "Teamspeak",
              pic: SnowIMG,
            },
          },
          {
            value: {
              name: "Dwix",
              description: "Teamspeak",
              pic: DwixIMG,
            },
          },
          {
            value: {
              name: "Artjomowitch",
              description: "Teamspeak",
              pic: ArtjomowitchIMG,
            },
          },
        ],
      },
    ],
  },
};

class SectionCommunity extends React.PureComponent {
  render() {
    console.log(value);
    return (
      <article id="community" class="community">
        {value.admins.show_admins && (
          <section id="admins" class="community-s admins-s">
            <header class="admins-h">
              <h3>{value.admins.admins_titel}</h3>
            </header>
            <article class="members">
              {value.admins.members.map((mrow, i) => {
                return (
                  <div class="mrow">
                    {mrow.value.map((member, i) => {
                      return (
                        <div class="member">
                          <div class="profile">
                            <div class="pic">
                              <img
                                src={member.value.pic}
                                alt={member.value.name}
                                className="img-fluid"
                              />
                            </div>
                            <div class="hollow">
                              <div class="info">
                                <div class="ifront">
                                  <img
                                    src={member.value.pic}
                                    alt={member.value.name}
                                    className="img-fluid"
                                  />
                                </div>
                                <div class="iback">
                                  <h5 class="charc">{member.value.name}</h5>
                                  <p>{member.value.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </article>
          </section>
        )}
      </article>
    );
  }
}

export default SectionCommunity;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2018-2019 Florian Kleber
 */

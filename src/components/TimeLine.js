import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faBirthdayCake,
  faSnowflake,
  faPaw,
  faHome,
  faShower,
  faUmbrellaBeach,
  faMountain,
  faBed,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

import { StaticQuery, graphql, navigate } from "gatsby";

export default function CustomizedTimeline() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const handlePageClick = (page, index) => {
    setSelectedMoment(index);
    navigate(page);
  };

  const icons = {
    faUserFriends: { icon: faUserFriends, colour: "#ff5722" },
    faBirthdayCake: { icon: faBirthdayCake, colour: "#bf360c" },
    faSnowflake: { icon: faSnowflake, colour: "#78909c" },
    faPaw: { icon: faPaw, colour: "#212121" },
    faHome: { icon: faHome, colour: "#ffecb3" },
    faShower: { icon: faShower, colour: "#b3e5fc" },
    faUmbrellaBeach: { icon: faUmbrellaBeach, colour: "#d7ccc8" },
    faMountain: { icon: faMountain, colour: "#a5d6a7" },
    faBed: { icon: faBed, colour: "#b3e5fc" },
    faCity: { icon: faCity, colour: "#b39ddb" },
  };

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                  date(formatString: "DD-MM-YYYY")
                  icon
                  location
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Timeline>
          {console.log(data.allMarkdownRemark.edges[0].node.frontmatter.title)}
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  style={{ flex: 0, fontWeight: "500", whiteSpace: "nowrap" }}
                >
                  {""}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    style={{
                      width: "17px",
                      height: "17px",
                      backgroundColor: icons[node.frontmatter.icon].colour,
                    }}
                  >
                    {/* <FastfoodIcon /> */}
                    <FontAwesomeIcon
                      icon={icons[node.frontmatter.icon].icon}
                      style={{ fontSize: "16px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "30px", px: 2 }}>
                  <Typography
                    variant="body2"
                    style={{
                      fontWeight: "500",
                      cursor: "pointer",
                      fontFamily:
                        "Ubuntu, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
                    }}
                    onClick={() =>
                      handlePageClick(node.frontmatter.slug, index)
                    }
                  >
                    {node.frontmatter.title}
                  </Typography>
                  <small style={{ color: "#9e9e9e" }}>
                    {node.frontmatter.date}
                  </small>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "12px", color: "#9e9e9e" }}
                  >
                    {node.frontmatter.location !== "" &&
                      node.frontmatter.location}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    />
  );
}

import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

import { StaticQuery, graphql, navigate } from "gatsby";

export default function CustomizedTimeline() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const handlePageClick = (page, index) => {
    setSelectedMoment(index);
    navigate(page);
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
                  style={{ flex: 0.5, fontWeight: "500" }}
                >
                  {node.frontmatter.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <FastfoodIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "30px", px: 2 }}>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: "500", cursor: "pointer" }}
                    onClick={() =>
                      handlePageClick(node.frontmatter.slug, index)
                    }
                  >
                    {node.frontmatter.title}
                  </Typography>
                  <small style={{ color: "#9e9e9e" }}>
                    {node.frontmatter.location}
                  </small>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    />
  );
}

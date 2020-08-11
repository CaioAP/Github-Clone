import React from "react";
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to={"/CaioAP"}>
          CaioAP/
        </Link>

        <span></span>

        <Link className={"reponame"} to={"/CaioAP/youtube-content"}>
          youtube-content
        </Link>
      </Breadcrumb>

      <p>Contain all of my youtube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"http://github.com/CaioAP/Github-Clone"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;

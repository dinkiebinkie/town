import React from "react";
import Chunk from "../../shared/Chunk";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_PHOTOS = gql`
  query score {
    score
  }
`;

const Instagram = () => (
  <Chunk>
    <Query query={GET_PHOTOS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Fetching Score...</p>;
        if (error) return <p>Oh no! {error}</p>;
        console.log(data);
        return <div />;
      }}
    </Query>
    {/* instagramUrl:{instagramUrl} */}
    {/* data:{data} */}
  </Chunk>
);

export default Instagram;

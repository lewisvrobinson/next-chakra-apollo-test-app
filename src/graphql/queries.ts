import { gql } from '@apollo/client';

export const GET_PAGINATED_CHARACTERS = gql`
  query GetPaginatedCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      location {
        name
      }
      species
      status
    }
  }
`
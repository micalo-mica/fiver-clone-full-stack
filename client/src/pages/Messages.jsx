import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import newRequest from "../helper/newRequest";

const M = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Title = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TitleText = styled.h2`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const TableContainer = styled.div`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Table = styled.table`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Tr = styled.tr`
  height: 50px;
  background-color: ${({ active }) => active && "#1dbf730f"};

  /* &:nth-child(even) {
    background-color: #1dbf730f;
  } */
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Th = styled.th`
  text-align: left;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Td = styled.td`
  font-size: ${({ big }) => big && "1.5rem"};
  font-weight: ${({ big }) => big && "bold"};
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// const MessageIcon = styled(RiMessage2Line)`
//   width: 20px;
//   cursor: pointer;
//   font-size: 1.5rem;
//   /* color: red; */
//   background-color: #1dbf73;
//   color: white;
//   @media (max-width: ${({ theme }) => theme.screens.sm2}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.sm1}) {
//   }
// `;
const MessageBtn = styled.button`
  background-color: #1dbf73;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0.3rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Messages() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <M>
      {isLoading ? (
        "isLoading..."
      ) : error ? (
        "Error"
      ) : (
        <Container>
          <Title>
            <TitleText>My Gigs</TitleText>
          </Title>
          <TableContainer>
            <Table>
              <Tr>
                <Th>Buyer</Th>
                <Th>Last Message</Th>
                <Th>Date</Th>
                <Th>Action</Th>
              </Tr>
              {/* Row Table */}
              {data &&
                data.map((c) => (
                  // <Tr active="active" key={c.id}>
                  <Tr active="active" key={c.id}>
                    <Td big="true">
                      {currentUser.isSeller ? c.buyerId : c.sellerId}
                    </Td>
                    <Td>
                      <Link to={`/message/${c.id}`}>
                        {c.lastMessage?.substring(0, 10)}...
                      </Link>
                    </Td>
                    <Td>{moment(c.updatedAt).fromNow()}</Td>
                    <Td>
                      {((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readByBuyer)) && (
                        <MessageBtn onClick={() => handleRead(c.id)}>
                          Mark as read
                        </MessageBtn>
                      )}
                    </Td>
                  </Tr>
                ))}
            </Table>
          </TableContainer>
        </Container>
      )}
    </M>
  );
}

export default Messages;

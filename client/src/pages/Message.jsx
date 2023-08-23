import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Pro from "../assets/pro.png";
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
  gap: 0.5rem;
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
const Back = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const BackIcon = styled(BiArrowBack)`
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// =============
const MessagesContainer = styled.div`
  margin: 30px 0px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow-y: scroll;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const MessagesContainerItems = styled.div`
  display: flex;
  gap: 20px;
  max-width: 600px;
  font-size: 18px;
  flex-direction: ${({ owner }) => owner && "row-reverse"};
  align-self: ${({ owner }) => owner && "flex-end"};
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Image = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const MessageText = styled.p`
  padding: 20px;
  border-radius: ${({ owner }) =>
    !owner ? "0px 20px 20px 20px" : " 20px 0px 20px 20px"};
  background-color: ${({ owner }) =>
    !owner ? "rgb(244, 241, 241)" : " royalblue"};
  color: ${({ owner }) => (!owner ? "gray" : " white")};
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// =============hr
const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(232, 230, 230);
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// =============
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const SendBtn = styled.button`
  background-color: #1dbf73;
  padding: 20px;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100px;
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    align-self: self-end;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Message() {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <M>
      <Container>
        <Back>
          <Link to="/messages">
            <BackIcon />
          </Link>
        </Back>
        {isLoading ? (
          "loading..."
        ) : error ? (
          "error"
        ) : (
          <MessagesContainer>
            {data.map((m) => (
              <MessagesContainerItems
                owner={m.userId === currentUser._id ? true : false}
                key={m._id}
              >
                <Image src={Pro} />
                <MessageText owner="true">{m.desc}</MessageText>
              </MessagesContainerItems>
            ))}
          </MessagesContainer>
        )}
        {/* hr */}
        <Hr />
        {/* message input */}
        <Form onSubmit={handleSubmit}>
          <TextArea
            name=""
            placeholder="write a message"
            id="write"
            cols="30"
            rows="10"
          ></TextArea>
          <SendBtn type="submit">Send</SendBtn>
        </Form>
      </Container>
    </M>
  );
}

export default Message;

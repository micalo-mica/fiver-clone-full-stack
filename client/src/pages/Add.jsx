import { Link } from "react-router-dom";
import styled from "styled-components";

import Pro from "../assets/pro.png";
import { categoryForInput } from "../static/categoryD";

const A = styled.div`
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
  gap: 1rem;
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

const PageTitles = styled.h2`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Sections = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    row-gap: 0.2rem;
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
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

const Input = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2.5rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  display: ${(prop) => prop.dis};
  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const Select = styled.select`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const Option = styled.option``;

const TextArea = styled.textarea`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

// right
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.8rem 3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
  width: max-content;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
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

function Add() {
  return (
    <A>
      <Container>
        <PageTitles>Add New Gig</PageTitles>
        <Sections>
          <Left>
            <InputContainer>
              <Label>Lodge Name</Label>
              <Input type="text" name="name" placeholder="lodge name" />
            </InputContainer>
            <InputContainer>
              <Label>Category</Label>
              <Select>
                <Option value="Choose a category">Choose a category</Option>
                {categoryForInput &&
                  categoryForInput.map((c) => {
                    return (
                      <Option key={c.id} value={c.cat}>
                        {c.cat}
                      </Option>
                    );
                  })}
              </Select>
            </InputContainer>
            <InputContainer>
              <Label>Upload Image</Label>
              <Input type="file" multiple />
            </InputContainer>
            <InputContainer>
              <Label>Description</Label>
              <TextArea
                name="description"
                placeholder="property description"
                cols="30"
                rows="10"
              ></TextArea>
            </InputContainer>
          </Left>
          <Right>
            <InputContainer>
              <Label>Title</Label>
              <Input type="text" name="title" placeholder="title" />
            </InputContainer>
            <InputContainer>
              <Label>Description</Label>
              <TextArea
                name="description"
                placeholder="short description"
                cols="30"
                rows="10"
              ></TextArea>
            </InputContainer>
            <InputContainer>
              <Label>Delivery time</Label>
              <Input type="number" name="number" min={1} />
            </InputContainer>
            <InputContainer>
              <Label>Price</Label>
              <Input type="number" name="price" min={1} />
            </InputContainer>
          </Right>
        </Sections>
        <Button>Create</Button>
      </Container>
    </A>
  );
}

export default Add;

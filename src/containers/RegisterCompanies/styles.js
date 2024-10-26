import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.p`
  color: #dcdcdc;
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 40px;
  margin-top: 24px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

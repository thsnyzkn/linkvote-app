import React, { useReducer } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addLink } from "../features/linkList/linkSlice";
import SubmitButton from "../components/SubmitButton";

const AddLink = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      url: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, url } = userInput;
    const data = {
      title,
      url,
    };
    dispatch(addLink(data));
    setUserInput({
      title: "",
      url: "",
    });
  };
  return (
    <>
      <RouterLink to={"/"}>
        <Box mb={4}>
          <Button
            data-testid="back-button"
            leftIcon={<ArrowBackIcon />}
            varian="ghost"
            bg="white"
            color="black"
            _hover={{ bg: "white", active: "white" }}
          >
            Return to List
          </Button>
        </Box>
      </RouterLink>
      <form onSubmit={handleSubmit}>
        {" "}
        <FormControl d="flex" flexDirection="column" px={3} isRequired>
          <Box mb={5}>
            <FormLabel htmlFor="title">Link Name:</FormLabel>
            <Input
              type="text"
              value={userInput.title}
              name="title"
              id="title"
              aria-label="link-name"
              placeholder="e.g. Indie Hackers"
              onChange={handleChange}
            />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="link-url">Link URL:</FormLabel>
            <Input
              type="text"
              value={userInput.url}
              name="url"
              id="link-url"
              aria-label="email-http-url"
              placeholder="e.g. https://hepsiburada.com"
              onChange={handleChange}
            />
          </Box>
          <SubmitButton
            aria-label="Add Button for New Link Entry"
            title={userInput.title}
            isFilled={userInput.url !== "" && userInput.title !== ""}
          />
        </FormControl>
      </form>
    </>
  );
};

export default AddLink;

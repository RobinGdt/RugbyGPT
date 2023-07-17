import React from "react";
import Button from "/Users/zindezin/Documents/Mes documents/Ecole/NodeJS/RugbyGPT/components/Button/Button";
import DropDown from "/Users/zindezin/Documents/Mes documents/Ecole/NodeJS/RugbyGPT/components/DropDown/DropDown";

const CreateAccountScreen = () => {
  return (
    <>
      <Button
        color="blue"
        isSubmitBtn={true}
        text="créer un compte"
        width="495"
      />
      <DropDown
        options={[]}
        onSelect={function (option: string): void {
          throw new Error("Function not implemented.");
        }}
        color={""}
        width={""}
      />
    </>
  );
};

export default CreateAccountScreen;

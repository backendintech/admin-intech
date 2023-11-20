import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import useModalUpdateHooks from "./useModalUpdateHooks";
import { Select, MenuItem } from "@mui/material";
import InputModalImage from "../../../components/InputModalImage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingFullScreen from "../../../components/LoadingFullScreen";

function ModalUpdate(props) {
  const { handleOnChange, form, allCategory, handleUpdateData, isLoading, handleChangeKeyPoint, handleMinusKeyPoint, handlePlusKeyPoint } =
    useModalUpdateHooks({
      id: props.idProduct,
    });

  return (
    <div>
      <ToastContainer />
      {!isLoading ? (
        form && (
          <>
            <h4 className="text-center text-2xl font-bold mb-5">Update Data</h4>
            <form className="flex flex-col gap-4" onSubmit={handleUpdateData}>
              <div className="flex flex-col justify-center md:grid grid-cols-2 place-items-center w-full gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.name}
                  name={"name"}
                  label={"Name"}
                  type={"text"}
                  required={true}
                  placeholder={"Input Product Name"}
                />

                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.sell_price}
                  name={"sell_price"}
                  label={"Sell Price"}
                  type={"number"}
                  required={true}
                  placeholder={"Input Product Sell Price"}
                />
              </div>
              <div className="flex flex-col justify-start w-full md:w-auto px-8 gap-3">
                <label>Category</label>
                <Select
                  id="demo-simple-select"
                  name="category"
                  onChange={handleOnChange}
                  value={form.category}
                  required
                  placeholder="Input Product Category"
                >
                  {allCategory &&
                    allCategory.map((item, i) => {
                      return (
                        <MenuItem
                          key={i}
                          className="capitalize"
                          value={item._id}
                        >
                          {item.category_name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </div>
              <div className="flex w-full justify-center ">
                <InputWithLabel
                  className={"w-full"}
                  onChange={handleOnChange}
                  value={form.description}
                  isMultiline
                  name={"description"}
                  label={"Description"}
                  type={"text"}
                  required={true}
                  placeholder={"Input Product Desc"}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="px-8">Specifications : </p>
                {form.keypoints.map((key, index) => (
                  <div className=" px-8">
                    <p className="font-light text-sm mb-2">
                      Keypoint {index + 1} :{" "}
                    </p>
                    <div
                      className="mb-3 flex items-center w-full gap-2"
                      key={index}
                    >
                      <input
                        placeholder="Masukan keypoint"
                        value={key}
                        type="text"
                        className={`border-gray-300 border w-full px-3 py-2 rounded-xl ${
                          index === 0 && "mr-12"
                        }`}
                        name="key"
                        onChange={(e) => {
                          handleChangeKeyPoint(e, index);
                        }}
                        required
                      />
                      {index !== 0 && (
                        <p id="basic-addon2">
                          <button
                            className="rounded-full bg-red-300 hover:bg-red-500 duration-300 ease-in-out px-4 py-2 text-white text-center flex items-center justify-center"
                            onClick={() => handleMinusKeyPoint(index)}
                          >
                            -
                          </button>
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  onClick={handlePlusKeyPoint}
                  className="bg-greyPrimary hover:bg-gray-400 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-black font-bold"
                >
                  Add Keypoint
                </button>
              </div>

              <div className="flex flex-col border-t-2 mt-8 pt-8 gap-5 border-slate-300 w-full">
                <InputModalImage
                  onChange={handleOnChange}
                  name={"thumbnail"}
                  label={"Thumbnail Image"}
                  imageUrl={form.thumbnailUrl}
                />
                <hr />
                <InputModalImage
                  onChange={handleOnChange}
                  name={"image1"}
                  label={"First Image Product"}
                  imageUrl={form.image1Url}
                />
                <hr />
                <InputModalImage
                  onChange={handleOnChange}
                  name={"image2"}
                  label={"Second Image Product"}
                  imageUrl={form.image2Url}
                />
                <hr />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-bluePrimary hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Update Data
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <button
                onClick={props.onClose}
                className="border-[1px] text-sm md:text-base hover:border-black translate duration-300 px-4 py-2 rounded-2xl font-bold"
              >
                Cancel
              </button>
            </div>
          </>
        )
      ) : (
        <LoadingFullScreen isLoading={isLoading} />
      )}
    </div>
  );
}

export default ModalUpdate;

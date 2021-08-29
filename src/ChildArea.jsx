import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがれんだりんぐされた！！");

  const deta = [...Array(2000).keys()];
  deta.forEach(() => {
    console.log("...");
  });

  console.log(deta);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

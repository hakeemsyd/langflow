import { useEffect } from "react";
import ForwardedIconComponent from "../../../../../components/genericIconComponent";
import { toolbarSelectItemProps } from "../../../../../types/components";

export default function ToolbarSelectItem({
  shift,
  isMac,
  keyboardKey,
  value,
  icon,
  styleObj,
}: toolbarSelectItemProps) {

  return (
    <div className="flex">
      <ForwardedIconComponent
        name={icon}
        className={`relative top-0.5 mr-2 h-4 w-4 ${styleObj?.iconClasses}`}
      />{" "}
      <span className={styleObj?.valueClasses}>{value}</span>{" "}
      {isMac ? (
        <ForwardedIconComponent
          name="Command"
          className={`absolute right-[${shift ? "2rem" : "1.15rem"}] top-[0.65em] h-3.5 w-3.5 stroke-2 ${styleObj?.commandClasses}`}
        ></ForwardedIconComponent>
      ) : (
        <span className={`absolute right-[${shift ? "2.10rem" : "1.15rem"}] top-[0.43em] stroke-2 ${styleObj?.ctrlClasses}`}>
            {shift ? (
              "Ctrl"
            ) : (
              "Ctrl +"
            )}
        </span>
      )}
        {shift && (
          <ForwardedIconComponent
            name="ArrowBigUp"
            className={`absolute right-[1.15rem] top-[0.65em] h-3.5 w-3.5 stroke-2 ${styleObj?.shiftClasses}`}
          />
        )}
        <span className={`absolute right-2 top-[0.43em] ${styleObj?.keyClasses}`}>{keyboardKey}</span>
    </div>
  );
}
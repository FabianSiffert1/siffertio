import React, { useState } from "react";
import styles from "./DropdownMenuTheme.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeToTheme } from "../../utils/reduxStore/theme/themeSlice";
import language from "../../assets/language/language";
import { RootState } from "../../utils/reduxStore/reduxStore";

export interface ThemeDropdownMenuProps {
  menuTitle: string;
  menuElements: { elementName: string; elementFunction: string }[];
}

export function DropdownMenuTheme(props: ThemeDropdownMenuProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const [display, setDisplay] = useState("none");
  const dispatch = useDispatch();

  function handleClick() {
    if (display === "none") {
      setDisplay("block");
    } else setDisplay("none");
  }

  function changeTheme(themeToDisplay: string) {
    dispatch(changeToTheme(themeToDisplay));
    setDisplay("none");
  }

  return (
    <div className={styles.DropdownMenu}>
      <div
        onClick={handleClick}
        className={
          currentTheme === language.THEME_DARK_VAR
            ? styles.dropdownButtonDarkTheme
            : currentTheme === language.THEME_LIGHT_VAR
            ? styles.dropdownButtonLightTheme
            : styles.dropdownButtonColorfulTheme
        }
      >
        {props.menuTitle}
      </div>
      <div className={styles.dropdownElements} style={{ display: display }}>
        {props.menuElements.map((element) => (
          <div
            className={
              currentTheme === language.THEME_DARK_VAR
                ? styles.elementDarkTheme
                : currentTheme === language.THEME_LIGHT_VAR
                ? styles.elementLightTheme
                : styles.elementColorfulTheme
            }
            key={element.elementName}
            style={{
              display:
                currentTheme === language.THEME_DARK_VAR &&
                element.elementName == language.THEME_DARK
                  ? "none"
                  : currentTheme === language.THEME_LIGHT_VAR &&
                    element.elementName == language.THEME_LIGHT
                  ? "none"
                  : currentTheme === language.THEME_COLORFUL_VAR &&
                    element.elementName === language.THEME_COLORFUL
                  ? "none"
                  : "",
            }}
            onClick={() => changeTheme(element.elementFunction)}
          >
            {element.elementName}
          </div>
        ))}
      </div>
    </div>
  );
}
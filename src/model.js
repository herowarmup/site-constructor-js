import image from "./assets/image.png";
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from "./classes/block.js";

const text = `
© <a href="https://t.me/herowamup" target="_blank">Herowarmup</a>
`;

export const model = [
  new TitleBlock("Конструктор сайтов на Vanilla JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Это картинка",
  }),

  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Учимся использовать принципы SOLID и ООП при разработке",
      "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];

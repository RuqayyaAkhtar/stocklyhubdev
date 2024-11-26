import bannerImage from '../images/image (10).png'
import detailImage from '../images/image (11).png'
import detailImage2 from '../images/Group 1171278057.png'
import detailImage3 from '../images/image (12).png'
import author from '../images/Ellipse 1.png'
const blogData = [
  {
    id: 1,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },
  {
    id: 2,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Wick ____ 10 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Wick",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 10, 2024",
  },
  {
    id: 3,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Smith ____ 11 October, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Smith",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "October 10, 2024",
  },
  {
    id: 4,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },
  {
    id: 5,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },
  {
    id: 6,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },
  {
    id: 7,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },
  {
    id: 8,
    title: "4 ways to diversify your income as a freelancer or agency",
    description:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results..",
    description2:
      "The integral calculator, your go-to tool for solving integrals online. Whether it’s indefinite or definite integrals, use it to get quick results.",
    bannerImage: bannerImage, // Ensure the image path matches your project
    moreInfo: "John Doe ____ 20 November, 2024",
    tableOfContent: [
      "What is Lorem Ipsum?",
      "Why do we use it?",
      "Where does it come from?",
      "Where can I get some?",
      "Why to Utilize Integral Collection With Steps?",
      "Advantages of Integral Solver",
    ],
    contentSections: [
      {
        heading: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        layout: "images-row", // Images in a row
        images: [detailImage,detailImage2],
      },
      {
        heading: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).",
        layout: "text-only", // No images
        images: [],
      },
      {
        heading: "Where does it come from?",
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        layout: "text-only",
        images: [],
      },
      {
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        layout: "image-left", // Image on the left, text on the right
        images: [detailImage3],
      },
    ],
    author: {
      name: "John Doe",
      image:author,
      lastUpdata:'Last Update February 21, 2024',
      bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    date: "November 20, 2024",
  },

];

export default blogData;
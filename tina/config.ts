import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "empowerTemplate",
        label: "Empower Template Pages",
        path: "content/empower",
        format: "md",
        ui: {
          filename: {
            // Use the title field to create a filename
            slugify: (values) => {
              return `empower-${values?.id || ""}`;
            },
          },
        },
        fields: [
          {
            type: "number",
            name: "id",
            label: "Page ID",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero Headline",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "benefit1",
            label: "Benefit 1",
          },
          {
            type: "string",
            name: "benefit2",
            label: "Benefit 2",
          },
          {
            type: "string",
            name: "benefit3",
            label: "Benefit 3",
          },
          {
            type: "string",
            name: "ctaButtonText",
            label: "CTA Button Text",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "testimonialText",
            label: "Testimonial Text",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "testimonialAuthor",
            label: "Testimonial Author",
          },
          {
            type: "string",
            name: "footerText",
            label: "Footer Text",
          }
        ],
      },
      {
        name: "glucoseTemplate",
        label: "Glucose Template Pages",
        path: "content/glucose",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return `glucose-${values?.id || ""}`;
            },
          },
        },
        fields: [
          {
            type: "number",
            name: "id",
            label: "Page ID",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "headline",
            label: "Headline",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subheadline",
            label: "Subheadline",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "mainVideo",
            label: "Main Video Thumbnail",
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL",
          },
          {
            type: "string",
            name: "ctaHeadline",
            label: "CTA Headline",
          },
          {
            type: "string",
            name: "ctaButtonText",
            label: "CTA Button Text",
          },
          {
            type: "string",
            name: "disclaimer",
            label: "Disclaimer Text",
            ui: {
              component: "textarea",
            },
          }
        ],
      },
    ],
  },
});
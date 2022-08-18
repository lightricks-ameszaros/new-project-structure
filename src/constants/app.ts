export const APPS = [
  {
    id: "facetune2-ios",
    name: "Facetune2",
    icon: "/img/facetune2_logo.jpeg"
  },
  {
    id: "facetune2-android",
    name: "Facetune2 Android",
    icon: "/img/facetune2_logo.jpeg"
  },
  {
    id: "videoleap-ios",
    name: "Videoleap",
    icon: "/img/videoleap_logo.jpeg"
  },
  {
    id: "videoleap-android",
    name: "Videoleap Android",
    icon: "/img/videoleap_logo.jpeg"
  },
  {
    id: "photoleap-ios",
    name: "Photoleap Android",
    icon: "/img/photoleap_logo.jpeg"
  },
  {
    id: "beatleap-ios",
    name: "Beatleap Android",
    icon: "/img/beatleap_logo.jpeg"
  }
];

export const APPS_BY_ID = Object.fromEntries(APPS.map((app) => [app.id, app]));

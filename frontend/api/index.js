var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), handleDataRequest = async (response, { request }) => {
  let isGet = request.method.toLowerCase() === "get", isPrefetch = (request.headers.get("Purpose") || request.headers.get("X-Purpose") || request.headers.get("Sec-Purpose") || request.headers.get("Sec-Fetch-Purpose") || request.headers.get("Moz-Purpose")) === "prefetch";
  return isGet && isPrefetch && !response.headers.has("Cache-Control") && response.headers.set("Cache-Control", "private, max-age=5"), response;
}, server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 37,
      columnNumber: 3
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Document: () => Document,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_core11 = require("@mantine/core"), import_modals = require("@mantine/modals"), import_remix2 = require("@mantine/remix"), import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app.config.ts
var appConfig = {
  name: "University Sports Event Management System",
  logo: "/logo.png"
}, app_config_default = appConfig;

// app/session.server.ts
var import_node = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/lib/user.server.ts
var import_core10 = require("@zodios/core");

// app/lib/zodios/api-client.server.ts
var import_core9 = require("@zodios/core"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/zodios/auth-api.ts
var import_core2 = require("@zodios/core"), import_zod3 = require("zod");

// app/lib/zodios/common.ts
var import_zod = require("zod"), UuidSchema = import_zod.z.string();

// app/lib/zodios/error.ts
var import_core = require("@zodios/core"), import_zod2 = require("zod"), errors = (0, import_core.makeErrors)([
  {
    status: "default",
    description: "Default error",
    schema: import_zod2.z.object({
      message: import_zod2.z.string(),
      success: import_zod2.z.boolean(),
      data: import_zod2.z.null()
    })
  }
]);

// app/lib/zodios/auth-api.ts
var UserSchema = import_zod3.z.object({
  id: UuidSchema,
  name: import_zod3.z.string(),
  email: import_zod3.z.string().email(),
  role: import_zod3.z.number().int().min(1).max(4),
  isActive: import_zod3.z.boolean(),
  createdAt: import_zod3.z.string(),
  updatedAt: import_zod3.z.string(),
  password: import_zod3.z.string()
}), LoginSchema = UserSchema.pick({
  email: !0,
  password: !0,
  role: !0
}), authApi = (0, import_core2.makeApi)([
  {
    method: "post",
    path: "/Auth/Login",
    alias: "verifyLogin",
    description: "Login",
    response: import_zod3.z.object({
      data: UuidSchema,
      message: import_zod3.z.string(),
      success: import_zod3.z.boolean()
    }),
    parameters: [
      {
        name: "login-user",
        type: "Body",
        schema: LoginSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/event-api.ts
var import_core3 = require("@zodios/core"), import_zod4 = require("zod");
var EventSchema = import_zod4.z.object({
  id: UuidSchema,
  name: import_zod4.z.string(),
  description: import_zod4.z.string(),
  startDateTime: import_zod4.z.string(),
  endDateTime: import_zod4.z.string(),
  sportId: import_zod4.z.string(),
  stadiumId: import_zod4.z.string(),
  teamOneId: import_zod4.z.string(),
  teamTwoId: import_zod4.z.string(),
  organizerId: import_zod4.z.string(),
  createdAt: import_zod4.z.string(),
  updatedAt: import_zod4.z.string()
}), CreateEventSchema = EventSchema.pick({
  name: !0,
  description: !0,
  startDateTime: !0,
  endDateTime: !0,
  sportId: !0,
  stadiumId: !0,
  teamOneId: !0,
  teamTwoId: !0,
  organizerId: !0
}), GetEventSchema = EventSchema.omit({
  sportId: !0,
  teamOneId: !0,
  teamTwoId: !0,
  stadiumId: !0,
  organizerId: !0
}).merge(
  import_zod4.z.object({
    capacity: import_zod4.z.number().int(),
    reservedSeats: import_zod4.z.number().int(),
    sport: import_zod4.z.object({
      id: UuidSchema,
      name: import_zod4.z.string(),
      description: import_zod4.z.string()
    }),
    teamOne: import_zod4.z.object({
      id: UuidSchema,
      name: import_zod4.z.string()
    }),
    teamTwo: import_zod4.z.object({
      id: UuidSchema,
      name: import_zod4.z.string()
    }),
    stadium: import_zod4.z.object({
      id: UuidSchema,
      name: import_zod4.z.string(),
      address: import_zod4.z.string(),
      capacity: import_zod4.z.number()
    }),
    organizer: import_zod4.z.object({
      id: UuidSchema,
      name: import_zod4.z.string(),
      email: import_zod4.z.string().email(),
      role: import_zod4.z.number(),
      isActive: import_zod4.z.boolean()
    })
  })
), UpdateEventSchema = EventSchema.pick({
  name: !0,
  description: !0,
  startDateTime: !0,
  endDateTime: !0
}), eventApi = (0, import_core3.makeApi)([
  {
    method: "get",
    path: "/Event/GetAll",
    alias: "getAllEvents",
    description: "Get all events",
    response: import_zod4.z.object({
      data: import_zod4.z.array(GetEventSchema),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Event/GetById/:id",
    alias: "getEventById",
    description: "Get a event by id",
    response: import_zod4.z.object({
      data: GetEventSchema,
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Event/GetEventsBySportId/:sportId",
    alias: "getEventsBySportId",
    description: "Get events by sport id",
    response: import_zod4.z.object({
      data: import_zod4.z.array(GetEventSchema),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Event/GetEventsByOrganizerId/:organizerId",
    alias: "getEventsByOrganizerId",
    description: "Get events by organizer id",
    response: import_zod4.z.object({
      data: import_zod4.z.array(GetEventSchema),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Event/GetEventsByTeamId/:teamId",
    alias: "getEventsByTeamId",
    description: "Get events by team id",
    response: import_zod4.z.object({
      data: import_zod4.z.array(GetEventSchema),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Event/GetEventsByStadiumId/:stadiumId",
    alias: "getEventsByStadiumId",
    description: "Get events by stadium id",
    response: import_zod4.z.object({
      data: import_zod4.z.array(GetEventSchema),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Event",
    alias: "createEvent",
    description: "Create an event",
    response: import_zod4.z.object({
      data: import_zod4.z.string().uuid().nullable(),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    parameters: [
      {
        name: "event",
        type: "Body",
        schema: CreateEventSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/Event/:id",
    alias: "updateEvent",
    description: "Update an event",
    response: import_zod4.z.object({
      data: import_zod4.z.string().uuid().nullable(),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    parameters: [
      {
        name: "update-event",
        type: "Body",
        schema: UpdateEventSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/reservation-api.ts
var import_core4 = require("@zodios/core"), import_zod5 = require("zod");
var ReservationSchema = import_zod5.z.object({
  id: UuidSchema,
  seatNumber: import_zod5.z.string(),
  isCancelled: import_zod5.z.boolean(),
  eventId: UuidSchema,
  studentId: UuidSchema
}), CreateReservationSchema = ReservationSchema.pick({
  eventId: !0,
  studentId: !0
}), GetEventReservationSchema = ReservationSchema.pick({
  id: !0,
  seatNumber: !0,
  isCancelled: !0
}).merge(
  import_zod5.z.object({
    event: import_zod5.z.object({
      id: UuidSchema,
      name: import_zod5.z.string(),
      description: import_zod5.z.string(),
      startDateTime: import_zod5.z.string(),
      endDateTime: import_zod5.z.string()
    }),
    student: import_zod5.z.object({
      id: UuidSchema,
      name: import_zod5.z.string(),
      email: import_zod5.z.string().email(),
      role: import_zod5.z.number(),
      isActive: import_zod5.z.boolean()
    })
  })
), GetStudentReservationSchema = ReservationSchema.pick({
  id: !0,
  seatNumber: !0,
  isCancelled: !0
}).merge(
  import_zod5.z.object({
    event: import_zod5.z.object({
      id: UuidSchema,
      name: import_zod5.z.string(),
      description: import_zod5.z.string(),
      startDateTime: import_zod5.z.string(),
      endDateTime: import_zod5.z.string()
    })
  })
), reservationApi = (0, import_core4.makeApi)([
  {
    method: "get",
    path: "/Reservation/Event/:eventId",
    alias: "getReservationsByEventId",
    description: "Get all reservations by event id",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetEventReservationSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Event/:eventId/active",
    alias: "getActiveReservationsByEventId",
    description: "Get active reservations by event id",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetEventReservationSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Student/:studentId",
    alias: "getReservationsByStudentId",
    description: "Get all reservations by student id",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetStudentReservationSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Student/:studentId/active",
    alias: "getActiveReservationsByStudentId",
    description: "Get active reservations by student id",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetStudentReservationSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "delete",
    path: "/Reservation/:reservationId",
    alias: "cancelReservation",
    description: "Cancel a reservation",
    response: import_zod5.z.object({
      data: UuidSchema,
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Reservation",
    alias: "createReservation",
    description: "Create a reservation",
    response: import_zod5.z.object({
      data: UuidSchema,
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    parameters: [
      {
        name: "reservation",
        type: "Body",
        schema: CreateReservationSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/sport-api.ts
var import_core5 = require("@zodios/core"), import_zod6 = require("zod");
var SportSchema = import_zod6.z.object({
  id: UuidSchema,
  name: import_zod6.z.string(),
  description: import_zod6.z.string(),
  createdAt: import_zod6.z.string(),
  updatedAt: import_zod6.z.string()
}), CreateSportSchema = SportSchema.pick({
  name: !0,
  description: !0
}), GetSportSchema = SportSchema.merge(
  import_zod6.z.object({
    teams: import_zod6.z.array(
      import_zod6.z.object({
        id: UuidSchema,
        name: import_zod6.z.string()
      })
    )
  })
), sportApi = (0, import_core5.makeApi)([
  {
    method: "get",
    path: "/Sport/GetAll",
    alias: "getAllSports",
    description: "Get all sports",
    response: import_zod6.z.object({
      data: import_zod6.z.array(GetSportSchema),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Sport/:id",
    alias: "getSportById",
    description: "Get a sport",
    response: import_zod6.z.object({
      data: GetSportSchema,
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Sport",
    alias: "createSport",
    response: import_zod6.z.object({
      data: UuidSchema.nullable(),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    parameters: [
      {
        name: "sport",
        type: "Body",
        schema: CreateSportSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/Sport/:id",
    alias: "updateSport",
    description: "Update a sport",
    response: import_zod6.z.object({
      data: UuidSchema.nullable(),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    parameters: [
      {
        name: "sport",
        type: "Body",
        schema: CreateSportSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/stadium-api.ts
var import_core6 = require("@zodios/core"), import_zod7 = require("zod");
var StadiumSchema = import_zod7.z.object({
  id: UuidSchema,
  name: import_zod7.z.string(),
  address: import_zod7.z.string(),
  capacity: import_zod7.z.number().int().min(0),
  createdAt: import_zod7.z.string(),
  updatedAt: import_zod7.z.string()
}), CreateStadiumSchema = StadiumSchema.pick({
  name: !0,
  address: !0,
  capacity: !0
}), GetStadiumSchema = StadiumSchema.merge(
  import_zod7.z.object({
    events: import_zod7.z.array(
      import_zod7.z.object({
        id: UuidSchema,
        name: import_zod7.z.string(),
        description: import_zod7.z.string(),
        startDateTime: import_zod7.z.string(),
        endDateTime: import_zod7.z.string()
      })
    )
  })
), stadiumApi = (0, import_core6.makeApi)([
  {
    method: "get",
    path: "/Stadium/GetAll",
    alias: "getAllStadiums",
    description: "Get all stadiums",
    response: import_zod7.z.object({
      data: import_zod7.z.array(GetStadiumSchema),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Stadium/:id",
    alias: "getStadiumId",
    description: "Get a stadium",
    response: import_zod7.z.object({
      data: GetStadiumSchema,
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Stadium",
    alias: "createStadium",
    description: "Create a stadium",
    response: import_zod7.z.object({
      data: UuidSchema.nullable(),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    parameters: [
      {
        name: "stadium",
        type: "Body",
        schema: CreateStadiumSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/Stadium/:id",
    alias: "updateStadium",
    description: "Update a stadium",
    response: import_zod7.z.object({
      data: UuidSchema.nullable(),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    parameters: [
      {
        name: "stadium",
        type: "Body",
        schema: CreateStadiumSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/team-api.ts
var import_core7 = require("@zodios/core"), import_zod8 = require("zod");
var TeamSchema = import_zod8.z.object({
  id: UuidSchema,
  name: import_zod8.z.string(),
  sportId: import_zod8.z.string(),
  createdAt: import_zod8.z.string(),
  updatedAt: import_zod8.z.string()
}), CreateTeamSchema = TeamSchema.pick({
  name: !0,
  sportId: !0
}), GetTeamSchema = TeamSchema.omit({
  sportId: !0
}).merge(
  import_zod8.z.object({
    sport: import_zod8.z.object({
      id: UuidSchema,
      name: import_zod8.z.string(),
      description: import_zod8.z.string()
    })
  })
), teamApi = (0, import_core7.makeApi)([
  {
    method: "get",
    path: "/Team/GetAll",
    alias: "getAllTeams",
    description: "Get all teams",
    response: import_zod8.z.object({
      data: import_zod8.z.array(GetTeamSchema),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Team/GetById/:id",
    alias: "getTeamById",
    description: "Get a team",
    response: import_zod8.z.object({
      data: GetTeamSchema,
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Team/GetTeamsBySportId/:sportId",
    alias: "getTeamsBySportId",
    description: "Get teams by sport id",
    response: import_zod8.z.object({
      data: import_zod8.z.array(GetTeamSchema),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Team",
    alias: "createTeam",
    description: "Create a team",
    response: import_zod8.z.object({
      data: UuidSchema.nullable(),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    parameters: [
      {
        name: "user",
        type: "Body",
        schema: CreateTeamSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/Team/:id",
    alias: "updateTeam",
    description: "Update a team",
    response: import_zod8.z.object({
      data: UuidSchema.nullable(),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    parameters: [
      {
        name: "update-team",
        type: "Body",
        schema: CreateTeamSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/user-api.ts
var import_core8 = require("@zodios/core"), import_zod9 = require("zod");
var UserSchema2 = import_zod9.z.object({
  id: UuidSchema,
  name: import_zod9.z.string(),
  email: import_zod9.z.string().email(),
  role: import_zod9.z.number().int().min(1).max(4),
  isActive: import_zod9.z.boolean(),
  createdAt: import_zod9.z.string(),
  updatedAt: import_zod9.z.string(),
  password: import_zod9.z.string()
}), GetUserSchema = UserSchema2.omit({ password: !0 }), CreateUserSchema = UserSchema2.omit({
  id: !0,
  createdAt: !0,
  updatedAt: !0,
  isActive: !0
}), userApi = (0, import_core8.makeApi)([
  {
    method: "get",
    path: "/User/GetAll",
    alias: "getAllUsers",
    description: "Get all users",
    response: import_zod9.z.object({
      data: import_zod9.z.array(GetUserSchema),
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/User/:id",
    alias: "getUserById",
    description: "Get a user",
    response: import_zod9.z.object({
      data: GetUserSchema,
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/User",
    alias: "createUser",
    description: "Create a user",
    response: import_zod9.z.object({
      data: UuidSchema.nullable(),
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
    }),
    parameters: [
      {
        name: "user",
        type: "Body",
        schema: CreateUserSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/api-client.server.ts
var BASE_URL = process.env.BACKEND_API_URL;
(0, import_tiny_invariant.default)(BASE_URL, "BACKEND_API_URL env var is required");
var apiClient = new import_core9.Zodios(BASE_URL, [
  ...userApi,
  ...authApi,
  ...sportApi,
  ...teamApi,
  ...stadiumApi,
  ...eventApi,
  ...reservationApi
]);

// app/lib/user.server.ts
var BACKEND_API_URL = process.env.BACKEND_API_URL;
async function getAllUsers() {
  try {
    return await apiClient.getAllUsers();
  } catch (error) {
    if ((0, import_core10.isErrorFromAlias)(userApi, "getAllUsers", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function getUserById(id) {
  try {
    return (await apiClient.getUserById({
      params: { id }
    })).data;
  } catch (error) {
    if ((0, import_core10.isErrorFromAlias)(userApi, "getUserById", error))
      return console.log("error", error.response.data), null;
    throw error;
  }
}
async function verifyLogin({
  email: email2,
  password: password2,
  role
}) {
  try {
    return await apiClient.verifyLogin({
      email: email2,
      password: password2,
      role
    });
  } catch (error) {
    if ((0, import_core10.isErrorFromAlias)(authApi, "verifyLogin", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createUser({
  email: email2,
  password: password2,
  name: name2,
  role
}) {
  try {
    return await apiClient.createUser({
      name: name2,
      email: email2,
      password: password2,
      role
    });
  } catch (error) {
    if ((0, import_core10.isErrorFromAlias)(userApi, "createUser", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/utils/constants.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => (UserRole2[UserRole2.USER = 1] = "USER", UserRole2[UserRole2.ORGANIZER = 2] = "ORGANIZER", UserRole2[UserRole2.ADMIN = 3] = "ADMIN", UserRole2[UserRole2.SUPER_ADMIN = 4] = "SUPER_ADMIN", UserRole2))(UserRole || {});

// app/session.server.ts
(0, import_tiny_invariant2.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId", USER_ROLE_KEY = "userRole", fourteenDaysInSeconds = 60 * 60 * 24 * 14, thirtyDaysInSeconds = 60 * 60 * 24 * 30;
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUserRole(request) {
  return (await getSession(request)).get(USER_ROLE_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request), userRole = await getUserRole(request);
  if (userId === void 0 || userRole === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember = !1,
  redirectTo,
  role
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), session.set(USER_ROLE_KEY, role), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? fourteenDaysInSeconds : thirtyDaysInSeconds
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return session.unset(USER_SESSION_KEY), (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function isStudent(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === 1 /* USER */;
}
async function isAdmin(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === 3 /* ADMIN */;
}
async function isSuperAdmin(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === 4 /* SUPER_ADMIN */;
}
async function isOrganizer(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === 2 /* ORGANIZER */;
}

// app/styles/app.css
var app_default = "/build/_assets/app-Y2WEXTV5.css";

// app/root.tsx
var import_sonner = require("sonner"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), appendCache = (0, import_core11.createEmotionCache)({ key: "mantine", prepend: !1 }), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node2.json)({ user });
}, meta = () => ({
  charset: "utf-8",
  title: app_config_default.name,
  viewport: "width=device-width,initial-scale=1"
});
function Document({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core11.MantineProvider, { withNormalizeCSS: !0, emotionCache: appendCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_sonner.Toaster,
        {
          duration: 3e3,
          richColors: !0,
          closeButton: !0,
          position: "bottom-left"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 60,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_modals.ModalsProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/routes/api/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var action = async ({ request }) => logout(request), loader2 = async () => (0, import_node3.redirect)("/");

// app/routes/super-admin.tsx
var super_admin_exports = {};
__export(super_admin_exports, {
  default: () => AppLayout,
  loader: () => loader3
});
var import_solid = require("@heroicons/react/24/solid"), import_core13 = require("@mantine/core"), import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "flex h-[44px] items-center justify-center px-6 py-1 text-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-gray-400", children: [
    "\xA9",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " ",
    app_config_default.name,
    ", Inc. All rights reserved."
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/TailwindContainer.tsx
var import_core12 = require("@mantine/core"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TailwindContainer({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_core12.clsx)("mx-auto max-w-2xl lg:max-w-7xl", className), children }, void 0, !1, {
    fileName: "app/components/TailwindContainer.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/utils/hooks.ts
var import_react3 = require("@remix-run/react"), React = __toESM(require("react"));
function useMatchesData(routeId) {
  let matchingRoutes = (0, import_react3.useMatches)(), route = React.useMemo(
    () => matchingRoutes.find((route2) => route2.id === routeId),
    [matchingRoutes, routeId]
  );
  return route == null ? void 0 : route.data;
}
function useOptionalUser() {
  return useMatchesData("root");
}
function useUser() {
  let { user } = useOptionalUser();
  if (!user)
    throw new Error("No user found");
  return user;
}

// app/routes/super-admin.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node4.redirect)("/student") : await isOrganizer(request) ? (0, import_node4.redirect)("/organizer") : await isAdmin(request) ? (0, import_node4.redirect)("/admin") : (0, import_node4.json)({}));
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderComponent, {}, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.ScrollArea, { classNames: { root: "flex-1 bg-gray-100" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Content, {}, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 34,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/super-admin.tsx",
    lineNumber: 31,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/super-admin.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
function HeaderComponent() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { replace: !0, action: "/api/auth/logout", method: "post", id: "logout-form" }, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "h-[100px] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full w-full items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-shrink-0 items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Anchor, { component: import_react4.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "img",
        {
          className: "h-16 object-cover object-center",
          src: app_config_default.logo,
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/super-admin.tsx",
        lineNumber: 52,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/super-admin.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Menu, { position: "bottom-start", withArrow: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Avatar, { color: "blue", size: "md", children: user.name.charAt(0) }, void 0, !1, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 66,
          columnNumber: 12
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Avatar, {}, void 0, !1, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 70,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 64,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Menu.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Menu.Item, { disabled: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: user.name }, void 0, !1, {
              fileName: "app/routes/super-admin.tsx",
              lineNumber: 78,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-0.5 text-sm", children: user.email }, void 0, !1, {
              fileName: "app/routes/super-admin.tsx",
              lineNumber: 79,
              columnNumber: 12
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/super-admin.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/super-admin.tsx",
            lineNumber: 76,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core13.Divider, {}, void 0, !1, {
            fileName: "app/routes/super-admin.tsx",
            lineNumber: 82,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_core13.Menu.Item,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid.ArrowLeftOnRectangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/super-admin.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              type: "submit",
              form: "logout-form",
              children: "Logout"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/super-admin.tsx",
              lineNumber: 84,
              columnNumber: 10
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/super-admin.tsx",
        lineNumber: 62,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/super-admin.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 50,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/super-admin.tsx",
    lineNumber: 46,
    columnNumber: 3
  }, this);
}
function Content() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/routes/super-admin.tsx",
    lineNumber: 104,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/super-admin.tsx",
    lineNumber: 103,
    columnNumber: 3
  }, this);
}

// app/routes/super-admin/index.tsx
var super_admin_exports2 = {};
__export(super_admin_exports2, {
  default: () => ParticipantDashboard,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node");

// app/components/EmptyState.tsx
var import_solid2 = require("@heroicons/react/24/solid"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function EmptyState({ message }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid2.TicketIcon, { className: "mx-auto h-9 w-9 text-gray-500" }, void 0, !1, {
      fileName: "app/components/EmptyState.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "mt-4 block text-sm font-medium text-gray-500", children: message }, void 0, !1, {
      fileName: "app/components/EmptyState.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EmptyState.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/routes/super-admin/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => (await requireUserId(request), (0, import_node5.json)({}));
function ParticipantDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-4 py-16 sm:px-6 sm:py-20 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-4xl font-extrabold tracking-tight text-gray-900", children: "Super Admin Dashboard" }, void 0, !1, {
      fileName: "app/routes/super-admin/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(EmptyState, { message: "To be Implemented" }, void 0, !1, {
      fileName: "app/routes/super-admin/index.tsx",
      lineNumber: 23,
      columnNumber: 8
    }, this) }, void 0, !1, {
      fileName: "app/routes/super-admin/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/super-admin/index.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/super-admin/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/super-admin/index.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/super-admin/index.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/organizer.tsx
var organizer_exports = {};
__export(organizer_exports, {
  default: () => AppLayout2,
  loader: () => loader5
});
var import_solid3 = require("@heroicons/react/24/solid"), import_core14 = require("@mantine/core"), import_node6 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node6.redirect)("/student") : await isSuperAdmin(request) ? (0, import_node6.redirect)("/super-admin") : await isAdmin(request) ? (0, import_node6.redirect)("/admin") : (0, import_node6.json)({}));
function AppLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(HeaderComponent2, {}, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.ScrollArea, { classNames: { root: "flex-1 bg-gray-100" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Content2, {}, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 34,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 31,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
function HeaderComponent2() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Form, { replace: !0, action: "/api/auth/logout", method: "post", id: "logout-form" }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "h-[100px] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full w-full items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-shrink-0 items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Anchor, { component: import_react5.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          className: "h-16 object-cover object-center",
          src: app_config_default.logo,
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/organizer.tsx",
        lineNumber: 52,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Menu, { position: "bottom-start", withArrow: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Avatar, { color: "blue", size: "md", children: user.name.charAt(0) }, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 66,
          columnNumber: 12
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Avatar, {}, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 70,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 64,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Menu.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Menu.Item, { disabled: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: user.name }, void 0, !1, {
              fileName: "app/routes/organizer.tsx",
              lineNumber: 78,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-0.5 text-sm", children: user.email }, void 0, !1, {
              fileName: "app/routes/organizer.tsx",
              lineNumber: 79,
              columnNumber: 12
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/organizer.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/organizer.tsx",
            lineNumber: 76,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core14.Divider, {}, void 0, !1, {
            fileName: "app/routes/organizer.tsx",
            lineNumber: 82,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_core14.Menu.Item,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid3.ArrowLeftOnRectangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/organizer.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              type: "submit",
              form: "logout-form",
              children: "Logout"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer.tsx",
              lineNumber: 84,
              columnNumber: 10
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer.tsx",
        lineNumber: 62,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 50,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 46,
    columnNumber: 3
  }, this);
}
function Content2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 104,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 103,
    columnNumber: 3
  }, this);
}

// app/routes/organizer/events.tsx
var events_exports = {};
__export(events_exports, {
  action: () => action2,
  default: () => ManageEvents,
  loader: () => loader6
});
var import_solid4 = require("@heroicons/react/24/solid"), import_core19 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_hooks3 = require("@mantine/hooks"), import_node8 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), React2 = __toESM(require("react")), import_zod10 = require("zod");

// app/lib/event.server.ts
var import_core15 = require("@zodios/core");
async function getEventsByOrganizerId(organizerId) {
  try {
    return await apiClient.getEventsByOrganizerId({
      params: {
        organizerId
      }
    });
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(eventApi, "getEventsByOrganizerId", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function getAllEvents() {
  try {
    return await apiClient.getAllEvents();
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(eventApi, "getAllEvents", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createEvent(newEvent) {
  try {
    return await apiClient.createEvent(newEvent);
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(eventApi, "createEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateEvent(id, newEvent) {
  try {
    return await apiClient.updateEvent(
      {
        name: newEvent.name,
        description: newEvent.description,
        endDateTime: newEvent.endDateTime,
        startDateTime: newEvent.startDateTime
      },
      {
        params: {
          id
        }
      }
    );
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(eventApi, "updateEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/lib/sport.server.ts
var import_core16 = require("@zodios/core");
async function getAllSports() {
  try {
    return await apiClient.getAllSports();
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(sportApi, "getAllSports", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createSport(newSport) {
  try {
    return await apiClient.createSport({
      name: newSport.name,
      description: newSport.description
    });
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(sportApi, "createSport", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateSport(id, newSport) {
  try {
    return await apiClient.updateSport(
      {
        name: newSport.name,
        description: newSport.description
      },
      {
        params: {
          id
        }
      }
    );
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(sportApi, "updateSport", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/lib/stadium.server.ts
var import_core17 = require("@zodios/core");
async function getAllStadiums() {
  try {
    return await apiClient.getAllStadiums();
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(stadiumApi, "getAllStadiums", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createStadium(newStadium) {
  try {
    return await apiClient.createStadium({
      name: newStadium.name,
      address: newStadium.address,
      capacity: newStadium.capacity
    });
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(stadiumApi, "createStadium", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateStadium(id, newStadium) {
  try {
    return await apiClient.updateStadium(
      {
        name: newStadium.name,
        address: newStadium.address,
        capacity: newStadium.capacity
      },
      {
        params: {
          id
        }
      }
    );
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(stadiumApi, "updateStadium", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/lib/team.server.ts
var import_core18 = require("@zodios/core");
async function getAllTeams() {
  try {
    return await apiClient.getAllTeams();
  } catch (error) {
    if ((0, import_core18.isErrorFromAlias)(teamApi, "getAllTeams", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/utils/misc.ts
var import_zod_fetch = require("zod-fetch");
function formatDateTime(date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}
var dbWithZod = (0, import_zod_fetch.createZodFetcher)(), userRoleLookup = (role) => {
  switch (role) {
    case 4 /* SUPER_ADMIN */:
      return "Super Admin";
    case 3 /* ADMIN */:
      return "Admin";
    case 2 /* ORGANIZER */:
      return "Organizer";
    case 1 /* USER */:
      return "User";
    default:
      return "Unknown";
  }
};

// app/utils/misc.server.ts
var import_node7 = require("@remix-run/node"), bcrypt = __toESM(require("bcryptjs"));
var DEFAULT_REDIRECT = "/", badRequest = (data) => (0, import_node7.json)(data, { status: 400 });
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}

// app/utils/validation.ts
async function validateAction(request, schema) {
  let formData = await request.formData(), fields = Object.fromEntries(formData), result = schema.safeParse(fields);
  return result.success ? {
    fields: result.data,
    fieldErrors: null
  } : {
    fields: null,
    fieldErrors: result.error.issues.reduce(
      (acc, issue) => {
        let key = issue.path[0] ?? issue.code;
        return acc[key] = issue.message, acc;
      },
      {}
    )
  };
}

// app/routes/organizer/events.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
var ManageEventSchema = import_zod10.z.object({
  eventId: import_zod10.z.string().optional(),
  name: import_zod10.z.string().min(1, "Name is required"),
  description: import_zod10.z.string().min(1, "Description is required"),
  sportId: import_zod10.z.string().min(1, "Sport is required"),
  teamOneId: import_zod10.z.string().min(1, "Team is required"),
  teamTwoId: import_zod10.z.string().min(1, "Team is required"),
  startDateTime: import_zod10.z.string().min(1, "Start date is required"),
  endDateTime: import_zod10.z.string().min(1, "End date is required"),
  stadiumId: import_zod10.z.string().min(1, "Stadium is required")
}), loader6 = async ({ request }) => {
  let organizerId = await requireUserId(request), [eventsResponse, stadiumsResponse, teamsResponse, sportsResponse] = await Promise.all([
    getEventsByOrganizerId(organizerId),
    getAllStadiums(),
    getAllTeams(),
    getAllSports()
  ]), events = eventsResponse.success ? eventsResponse.data ?? [] : [], stadiums = stadiumsResponse.success ? stadiumsResponse.data ?? [] : [], teams = teamsResponse.success ? teamsResponse.data ?? [] : [], sports = sportsResponse.success ? sportsResponse.data ?? [] : [];
  return (0, import_node8.json)({
    events,
    stadiums,
    teams,
    sports
  });
}, action2 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, ManageEventSchema);
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  console.log(fields);
  let { eventId, ...rest } = fields;
  return eventId ? (await updateEvent(eventId, rest), (0, import_node8.json)({ success: !0 })) : (await createEvent({
    ...rest,
    organizerId: await requireUserId(request)
  }), (0, import_node8.json)({ success: !0 }));
};
function ManageEvents() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  let fetcher = (0, import_react6.useFetcher)(), { events, sports, stadiums, teams } = (0, import_react6.useLoaderData)(), [selectedEventId, setSelectedEventId] = React2.useState(null), [selectedEvent, setSelectedEvent] = React2.useState(null), [selectedSportId, setSelectedSportId] = React2.useState(null), [selectedTeamOneId, setSelectedTeamOneId] = React2.useState(null), [selectedTeamTwoId, setSelectedTeamTwoId] = React2.useState(null), [selectedStartDateTime, setSelectedStartDateTime] = React2.useState(void 0), [selectedEndDateTime, setSelectedEndDateTime] = React2.useState(void 0), [mode, setMode] = React2.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks3.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React2.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && (setSelectedEventId(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), React2.useEffect(() => {
    if (!selectedEventId) {
      setSelectedEvent(null), setSelectedSportId(null), setSelectedTeamOneId(null), setSelectedTeamTwoId(null), setSelectedStartDateTime(null), setSelectedEndDateTime(null);
      return;
    }
    let event = events.find((event2) => event2.id === selectedEventId);
    event && (setSelectedEvent(event), setSelectedSportId(event.sport.id), setSelectedTeamOneId(event.teamOne.id), setSelectedTeamTwoId(event.teamTwo.id), setSelectedStartDateTime(
      event.startDateTime ? new Date(event.startDateTime) : void 0
    ), setSelectedEndDateTime(
      event.endDateTime ? new Date(event.endDateTime) : void 0
    ), handleModal.open());
  }, [events, selectedEventId]), React2.useEffect(() => {
    if (selectedStartDateTime) {
      if (!selectedEndDateTime) {
        setSelectedEndDateTime(
          new Date(selectedStartDateTime.getTime() + 60 * 60 * 1e3)
        );
        return;
      }
      selectedStartDateTime.getTime() > selectedEndDateTime.getTime() && setSelectedEndDateTime(
        new Date(selectedStartDateTime.getTime() + 60 * 60 * 1e3)
      );
    }
  }, [selectedEndDateTime, selectedStartDateTime]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_core19.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_solid4.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 205,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react6.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 204,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Manage Events" }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 216,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Manage the events that are available for students to register for." }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 219,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 203,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_core19.Button,
          {
            loading: isSubmitting,
            loaderPosition: "left",
            onClick: () => {
              setMode(1 /* add */), handleModal.open();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_solid4.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 233,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "ml-2", children: "Add Event" }, void 0, !1, {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 234,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 225,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 224,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 202,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 244,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Schedule"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 251,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Team One"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 258,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Team Two"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 265,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Stadium"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 272,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 278,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 242,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: event.name }, void 0, !1, {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 288,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-gray-500", children: event.sport.name }, void 0, !1, {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 289,
              columnNumber: 14
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
              formatDateTime(event.startDateTime),
              " -"
            ] }, void 0, !0, {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 294,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: formatDateTime(event.endDateTime) }, void 0, !1, {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 295,
              columnNumber: 14
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.teamOne.name }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.teamTwo.name }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.stadium.name }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_core19.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              loaderPosition: "right",
              disabled: new Date(event.startDateTime) < /* @__PURE__ */ new Date(),
              onClick: () => {
                setSelectedEventId(event.id), setMode(0 /* edit */);
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 308,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 307,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this)
        ] }, event.id, !0, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 286,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 284,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 240,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 239,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 238,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizer/events.tsx",
      lineNumber: 201,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer/events.tsx",
      lineNumber: 200,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_core19.Modal,
      {
        opened: isModalOpen,
        onClose: () => {
          setSelectedEventId(null), handleModal.close();
        },
        title: (0, import_core19.clsx)({
          "Edit event": mode === 0 /* edit */,
          "Add event": mode === 1 /* add */
        }),
        centered: !0,
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "eventId", value: selectedEvent == null ? void 0 : selectedEvent.id }, void 0, !1, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 349,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_core19.TextInput,
            {
              name: "name",
              label: "Name",
              placeholder: "Enter event name",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.name,
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 351,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_core19.Textarea,
            {
              name: "description",
              label: "Description",
              placeholder: "Enter event description",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.description,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.description,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 360,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_core19.Select,
                  {
                    name: "sportId",
                    label: "Sport",
                    placeholder: "Select a sport",
                    value: selectedSportId,
                    onChange: (val) => setSelectedSportId(val),
                    data: sports.map((sport) => ({
                      label: sport.name,
                      value: sport.id
                    })),
                    error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.sportId,
                    readOnly: Boolean(selectedTeamOneId) || Boolean(selectedTeamTwoId) || mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/events.tsx",
                    lineNumber: 376,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/events.tsx",
                  lineNumber: 375,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 370,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_core19.Select,
                  {
                    name: "stadiumId",
                    label: "Stadium",
                    placeholder: "Select a stadium",
                    defaultValue: selectedEvent == null ? void 0 : selectedEvent.stadium.id,
                    data: stadiums.map((stadium) => ({
                      label: stadium.name,
                      value: stadium.id
                    })),
                    error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.stadiumId,
                    readOnly: mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/events.tsx",
                    lineNumber: 403,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/events.tsx",
                  lineNumber: 402,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 397,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 369,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_core19.Select,
                  {
                    name: "teamOneId",
                    label: "Team One",
                    placeholder: "Select a team",
                    clearable: !0,
                    value: selectedTeamOneId,
                    onChange: (val) => setSelectedTeamOneId(val),
                    data: teams.filter((t) => t.sport.id === selectedSportId).map((sport) => ({
                      label: sport.name,
                      value: sport.id
                    })),
                    error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.teamOneId,
                    nothingFound: "No teams found",
                    readOnly: selectedSportId === null || mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/events.tsx",
                    lineNumber: 427,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/events.tsx",
                  lineNumber: 426,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 421,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_core19.Select,
                  {
                    name: "teamTwoId",
                    label: "Team Two",
                    placeholder: "Select a team",
                    clearable: !0,
                    value: selectedTeamTwoId,
                    onChange: (val) => setSelectedTeamTwoId(val),
                    data: teams.filter(
                      (t) => t.sport.id === selectedSportId && t.id !== selectedTeamOneId
                    ).map((sport) => ({
                      label: sport.name,
                      value: sport.id
                    })),
                    error: (_m = (_l = fetcher.data) == null ? void 0 : _l.fieldErrors) == null ? void 0 : _m.teamTwoId,
                    readOnly: selectedTeamOneId === null || mode === 0 /* edit */,
                    nothingFound: "No teams found",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/events.tsx",
                    lineNumber: 454,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/events.tsx",
                  lineNumber: 453,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 448,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 420,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_dates.DateTimePicker,
            {
              valueFormat: "MMM DD 'YY - hh:mm A",
              name: "startDateTime",
              label: "Event Start",
              minDate: mode === 0 /* edit */ ? /* @__PURE__ */ new Date() : new Date(Date.now() + 864e5),
              placeholder: "Select a date & time",
              value: selectedStartDateTime,
              onChange: (val) => setSelectedStartDateTime(val),
              error: (_o = (_n = fetcher.data) == null ? void 0 : _n.fieldErrors) == null ? void 0 : _o.startDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 480,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_dates.DateTimePicker,
            {
              valueFormat: "MMM DD 'YY - hh:mm A",
              name: "endDateTime",
              label: "End Date & Time",
              placeholder: "Select a date & time",
              minDate: mode === 0 /* edit */ ? /* @__PURE__ */ new Date() : selectedStartDateTime ?? new Date(Date.now() + 864e5),
              value: selectedEndDateTime,
              onChange: (val) => setSelectedEndDateTime(val),
              disabled: selectedStartDateTime === null,
              error: (_q = (_p = fetcher.data) == null ? void 0 : _p.fieldErrors) == null ? void 0 : _q.endDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/events.tsx",
              lineNumber: 496,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => {
                  setSelectedEvent(null), handleModal.close();
                },
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 514,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core19.Button,
              {
                type: "submit",
                loading: isSubmitting,
                disabled: !selectedTeamTwoId || !selectedTeamOneId || !selectedSportId || !selectedStartDateTime || !selectedEndDateTime,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add event"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/events.tsx",
                lineNumber: 525,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/events.tsx",
            lineNumber: 513,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 348,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/events.tsx",
          lineNumber: 347,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/organizer/events.tsx",
        lineNumber: 334,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/organizer/events.tsx",
    lineNumber: 199,
    columnNumber: 3
  }, this);
}

// app/routes/organizer/index.tsx
var organizer_exports2 = {};
__export(organizer_exports2, {
  default: () => ParticipantDashboard2,
  loader: () => loader7
});
var import_solid5 = require("@heroicons/react/24/solid"), import_node9 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), actions = [
  {
    title: "My Events",
    description: "View and manage your events",
    href: "events",
    icon: import_solid5.TicketIcon
  }
], loader7 = async ({ request }) => (await requireUserId(request), (0, import_node9.json)({}));
function ParticipantDashboard2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-4 py-16 sm:px-6 sm:py-20 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-4xl font-extrabold tracking-tight text-gray-900", children: "Organizer Dashboard" }, void 0, !1, {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 sm:gap-px sm:divide-y-0", children: actions.map((action10, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { action: action10, actionIdx }, actionIdx, !1, {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizer/index.tsx",
    lineNumber: 28,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer/index.tsx",
    lineNumber: 26,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer/index.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
function Card({
  action: action10,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: (0, import_clsx.default)(
        actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
        actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
        actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "span",
          {
            className: (0, import_clsx.default)(
              "text-blue-700",
              "bg-blue-50",
              "inline-flex rounded-lg p-3 ring-4 ring-white"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(action10.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 73,
              columnNumber: 6
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 66,
            columnNumber: 5
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 65,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-lg font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react7.Link, { to: action10.href, className: "focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 80,
              columnNumber: 7
            }, this),
            action10.title
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 78,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 77,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: action10.description }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 84,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 76,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "span",
          {
            className: "pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "svg",
              {
                className: "h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 96,
                  columnNumber: 6
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 90,
                columnNumber: 5
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 86,
            columnNumber: 4
          },
          this
        )
      ]
    },
    action10.title,
    !0,
    {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 53,
      columnNumber: 3
    },
    this
  );
}

// app/routes/__student.tsx
var student_exports = {};
__export(student_exports, {
  default: () => AppLayout3,
  loader: () => loader8
});
var import_solid6 = require("@heroicons/react/24/solid"), import_core20 = require("@mantine/core"), import_node10 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => (await requireUserId(request), await isAdmin(request) ? (0, import_node10.redirect)("/admin") : await isOrganizer(request) ? (0, import_node10.redirect)("/organizer") : await isSuperAdmin(request) ? (0, import_node10.redirect)("/super-admin") : (0, import_node10.json)({}));
function AppLayout3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HeaderComponent3, {}, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.ScrollArea, { classNames: { root: "flex-1 bg-gray-100" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Content3, {}, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 39,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 35,
    columnNumber: 3
  }, this);
}
function HeaderComponent3() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Form, { replace: !0, action: "/api/auth/logout", method: "post", id: "logout-form" }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "h-[100px] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex h-full w-full items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-shrink-0 items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Anchor, { component: import_react8.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "img",
        {
          className: "h-16 object-cover object-center",
          src: app_config_default.logo,
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__student.tsx",
          lineNumber: 58,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__student.tsx",
        lineNumber: 57,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Menu, { position: "bottom-start", withArrow: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Avatar, { color: "blue", size: "md", children: user.name.charAt(0) }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 71,
          columnNumber: 12
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Avatar, {}, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 75,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 69,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Menu.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Menu.Item, { disabled: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: user.name }, void 0, !1, {
              fileName: "app/routes/__student.tsx",
              lineNumber: 83,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "mt-0.5 text-sm", children: user.email }, void 0, !1, {
              fileName: "app/routes/__student.tsx",
              lineNumber: 84,
              columnNumber: 12
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__student.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/__student.tsx",
            lineNumber: 81,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core20.Divider, {}, void 0, !1, {
            fileName: "app/routes/__student.tsx",
            lineNumber: 87,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_core20.Menu.Item,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_solid6.ArrowLeftOnRectangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/__student.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, this),
              type: "submit",
              form: "logout-form",
              children: "Logout"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student.tsx",
              lineNumber: 89,
              columnNumber: 10
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student.tsx",
        lineNumber: 67,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 51,
    columnNumber: 3
  }, this);
}
function Content3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 109,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 108,
    columnNumber: 3
  }, this);
}

// app/routes/__student/my-events.tsx
var my_events_exports = {};
__export(my_events_exports, {
  action: () => action3,
  default: () => Events,
  loader: () => loader9
});
var import_solid7 = require("@heroicons/react/24/solid"), import_core22 = require("@mantine/core"), import_hooks5 = require("@mantine/hooks"), import_node11 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), React3 = __toESM(require("react")), import_sonner2 = require("sonner"), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_zod11 = require("zod");

// app/lib/reservation.server.ts
var import_core21 = require("@zodios/core");
async function getReservationsByStudentId(studentId) {
  try {
    return await apiClient.getReservationsByStudentId({
      params: {
        studentId
      }
    });
  } catch (error) {
    if ((0, import_core21.isErrorFromAlias)(reservationApi, "getReservationsByStudentId", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createReservation(newReservation) {
  try {
    return await apiClient.createReservation(newReservation);
  } catch (error) {
    if ((0, import_core21.isErrorFromAlias)(reservationApi, "createReservation", error))
      return console.log("error", error.response.data), error.response.data;
    throw new Error("Something went wrong");
  }
}

// app/routes/__student/my-events.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), CreateReservationSchema2 = import_zod11.z.object({
  eventId: import_zod11.z.string().min(1, "EventId is required")
}), loader9 = async ({ request }) => {
  let studentId = await requireUserId(request), eventsResponse = await getAllEvents(), reservationsResponse = await getReservationsByStudentId(studentId);
  if (eventsResponse.success && reservationsResponse.success) {
    let events = eventsResponse.data, reservations = reservationsResponse.data;
    return (0, import_tiny_invariant3.default)(events && reservations, "Events and reservations must be defined"), (0, import_node11.json)({
      events,
      reservations
    });
  }
  return (0, import_node11.json)({
    events: [],
    reservations: []
  });
}, action3 = async ({ request }) => {
  let studentId = await requireUserId(request), { fields, fieldErrors } = await validateAction(
    request,
    CreateReservationSchema2
  );
  if (fieldErrors)
    return badRequest({
      success: !1,
      message: "Invalid fields",
      fieldErrors
    });
  let response = await createReservation({
    studentId,
    eventId: fields.eventId
  });
  return response.success ? (0, import_node11.json)({
    success: !0,
    message: response.message
  }) : badRequest({
    success: !1,
    message: response.message,
    fieldErrors: {
      eventId: response.message
    }
  });
};
function Events() {
  var _a, _b, _c, _d;
  let { reservations, events } = (0, import_react9.useLoaderData)(), fetcher = (0, import_react9.useFetcher)(), [isModalOpen, handleModal] = (0, import_hooks5.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React3.useEffect(() => {
    fetcher.state === "idle" && fetcher.data && (fetcher.data.success ? (import_sonner2.toast.success(fetcher.data.message), handleModal.close()) : import_sonner2.toast.error(fetcher.data.message));
  }, [fetcher.data, fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_core22.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_solid7.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 129,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react9.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 128,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "My Events" }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 140,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Here you can see all the events you have reserved tickets for." }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 143,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Button, { loaderPosition: "left", onClick: () => handleModal.open(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_solid7.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 149,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "ml-2", children: "Reserve Tickets" }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 150,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 148,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 147,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 126,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Event"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 160,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Schedule"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 167,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Seat Number"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 174,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
              children: "Event Status"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 181,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 187,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 158,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: reservations.map((reservation) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          ReservationRow,
          {
            reservations: reservation
          },
          reservation.id,
          !1,
          {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 195,
            columnNumber: 12
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 193,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 156,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 154,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 125,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 124,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_core22.Modal,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Buy tickets",
        overlayProps: {
          opacity: 0.6,
          blur: 1.2
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          ((_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.eventId) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_core22.Alert,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_solid7.InformationCircleIcon, { className: "h-6 w-6" }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 221,
                columnNumber: 15
              }, this),
              title: "Error",
              color: "red",
              children: fetcher.data.fieldErrors.eventId
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 220,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            import_core22.Select,
            {
              name: "eventId",
              label: "Event",
              withinPortal: !0,
              placeholder: "Select an event",
              nothingFound: "No events found",
              itemComponent: SelectItem,
              data: events.map((event) => {
                let availableSeats = event.capacity - event.reservedSeats;
                return {
                  start: event.startDateTime,
                  end: event.endDateTime,
                  address: event.stadium.name,
                  label: `${event.name} (${availableSeats} seats available)`,
                  value: event.id,
                  disabled: availableSeats === 0
                };
              }),
              error: Boolean((_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.eventId),
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 229,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_core22.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => handleModal.close(),
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 253,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_core22.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Reserve your seat"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 261,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 252,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 218,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 217,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 208,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__student/my-events.tsx",
    lineNumber: 123,
    columnNumber: 3
  }, this);
}
function ReservationRow({
  reservations
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: reservations.event.name }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 283,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: formatDateTime(reservations.event.startDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 288,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: formatDateTime(reservations.event.endDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 289,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 287,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: reservations.seatNumber }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 292,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Badge, { color: reservations.isCancelled ? "red" : "green", children: reservations.isCancelled ? "Cancelled" : "Active" }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 297,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 296,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0" }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 302,
      columnNumber: 4
    }, this)
  ] }, reservations.id, !0, {
    fileName: "app/routes/__student/my-events.tsx",
    lineNumber: 282,
    columnNumber: 3
  }, this);
}
var SelectItem = React3.forwardRef(
  (props, ref) => {
    let { start, end, address, label, ...others } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { ref, ...others, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Group, { noWrap: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Text, { size: "sm", children: label }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 321,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Text, { size: "xs", opacity: 0.65, children: address }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 322,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core22.Text, { size: "xs", opacity: 0.65, children: [
        formatDateTime(start),
        " - ",
        formatDateTime(end),
        ")"
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 325,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 320,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 319,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 318,
      columnNumber: 4
    }, this);
  }
);

// app/routes/__student/events.tsx
var events_exports2 = {};
__export(events_exports2, {
  default: () => Events2,
  loader: () => loader10
});
var import_solid8 = require("@heroicons/react/24/solid"), import_core23 = require("@mantine/core"), import_node12 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), React4 = __toESM(require("react")), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let eventsResponse = await getAllEvents();
  if (eventsResponse.success) {
    let events = eventsResponse.data;
    return (0, import_tiny_invariant4.default)(events, "Events should be defined"), (0, import_node12.json)({ events });
  }
  return (0, import_node12.json)({ events: [] });
};
function Events2() {
  let { events } = (0, import_react10.useLoaderData)(), upcomingEvents = React4.useMemo(
    () => events.filter((event) => new Date(event.startDateTime) > /* @__PURE__ */ new Date()),
    [events]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_core23.Button,
          {
            leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_solid8.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
              fileName: "app/routes/__student/events.tsx",
              lineNumber: 40,
              columnNumber: 19
            }, this),
            variant: "white",
            size: "md",
            component: import_react10.Link,
            to: "..",
            pl: 0,
            mb: 20,
            color: "gray",
            children: "Back"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 39,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Events" }, void 0, !1, {
          fileName: "app/routes/__student/events.tsx",
          lineNumber: 51,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Here you can see all the events you have reserved tickets for." }, void 0, !1, {
          fileName: "app/routes/__student/events.tsx",
          lineNumber: 52,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core23.Button, { loaderPosition: "left", onClick: () => {
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_solid8.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/routes/__student/events.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "ml-2", children: "Reserve Tickets" }, void 0, !1, {
          fileName: "app/routes/__student/events.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 57,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
            children: "Event"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 69,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
            children: "Date"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 76,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
            children: "No of tickets"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 83,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
            children: "Event Status"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 90,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Amount"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 97,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Order Status"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 104,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/events.tsx",
            lineNumber: 111,
            columnNumber: 12
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 67,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: upcomingEvents.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(EventRow, { event }, event.id, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 119,
        columnNumber: 12
      }, this)) }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 117,
        columnNumber: 10
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 65,
      columnNumber: 8
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 63,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student/events.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/events.tsx",
    lineNumber: 35,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/events.tsx",
    lineNumber: 34,
    columnNumber: 3
  }, this);
}
function EventRow({
  event
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "font-medium text-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: event.name }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 141,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: event.stadium.name }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 142,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 140,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 139,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: formatDateTime(event.startDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 147,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: formatDateTime(event.endDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/events.tsx",
        lineNumber: 148,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 146,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: event.name }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 151,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: event.name }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: event.name }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 159,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: event.name }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 163,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0" }, void 0, !1, {
      fileName: "app/routes/__student/events.tsx",
      lineNumber: 167,
      columnNumber: 4
    }, this)
  ] }, event.id, !0, {
    fileName: "app/routes/__student/events.tsx",
    lineNumber: 138,
    columnNumber: 3
  }, this);
}

// app/routes/__student/index.tsx
var student_exports2 = {};
__export(student_exports2, {
  default: () => StudentDashboard,
  loader: () => loader11
});
var import_solid9 = require("@heroicons/react/24/solid"), import_node13 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_clsx2 = __toESM(require("clsx"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), actions2 = [
  {
    title: "Events",
    description: "View latest events",
    href: "events",
    icon: import_solid9.TicketIcon
  },
  {
    title: "My Events",
    description: "View and manage my events",
    href: "my-events",
    icon: import_solid9.TicketIcon
  }
], loader11 = async ({ request }) => (await requireUserId(request), (0, import_node13.json)({}));
function StudentDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "px-4 py-16 sm:px-6 sm:py-20 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "text-2xl font-extrabold tracking-tight text-gray-900", children: "Student Dashboard" }, void 0, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0", children: actions2.map((action10, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Card2, { action: action10, actionIdx }, actionIdx, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 34,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 32,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 31,
    columnNumber: 3
  }, this);
}
function Card2({
  action: action10,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "div",
    {
      className: (0, import_clsx2.default)(
        actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
        actionIdx === actions2.length - 2 ? "sm:rounded-bl-lg" : "",
        actionIdx === actions2.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "span",
          {
            className: (0, import_clsx2.default)(
              "text-blue-700",
              "bg-blue-50",
              "inline-flex rounded-lg p-3 ring-4 ring-white"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(action10.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/__student/index.tsx",
              lineNumber: 79,
              columnNumber: 6
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 72,
            columnNumber: 5
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 71,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-lg font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Link, { to: action10.href, className: "focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/__student/index.tsx",
              lineNumber: 86,
              columnNumber: 7
            }, this),
            action10.title
          ] }, void 0, !0, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 84,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 83,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: action10.description }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 90,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 82,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "span",
          {
            className: "pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              "svg",
              {
                className: "h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" }, void 0, !1, {
                  fileName: "app/routes/__student/index.tsx",
                  lineNumber: 102,
                  columnNumber: 6
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/index.tsx",
                lineNumber: 96,
                columnNumber: 5
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 92,
            columnNumber: 4
          },
          this
        )
      ]
    },
    action10.title,
    !0,
    {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 59,
      columnNumber: 3
    },
    this
  );
}

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader12
});
var import_node14 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => await getUser(request) ? (0, import_node14.redirect)("/") : null;
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex min-h-full bg-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mx-auto w-full max-w-md place-items-center rounded-md border bg-white px-12 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 18,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 16,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action4,
  default: () => Register
});
var import_core24 = require("@mantine/core"), import_react13 = require("@remix-run/react");

// app/lib/zod.schema.ts
var import_zod12 = require("zod"), name = import_zod12.z.string().min(1, "Name is required"), email = import_zod12.z.string().email("Invalid email"), password = import_zod12.z.string().trim().min(1, "Password is required"), LoginSchema2 = import_zod12.z.object({
  email,
  password,
  remember: import_zod12.z.enum(["on"]).optional(),
  role: import_zod12.z.preprocess(Number, import_zod12.z.number().int().min(1).max(4)),
  redirectTo: import_zod12.z.string().default("/")
}), RegisterUserSchema = import_zod12.z.object({
  name,
  email,
  password,
  confirmPassword: password
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["password", "confirmPassword"]
});

// app/routes/__auth/register.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(
    request,
    RegisterUserSchema
  );
  if (fieldErrors)
    return badRequest({ fieldErrors });
  let { email: email2, password: password2, name: name2 } = fields, userResponse = await createUser({
    email: email2,
    password: password2,
    name: name2,
    role: 1 /* USER */
  });
  return console.log(userResponse), userResponse.success ? createUserSession({
    request,
    userId: userResponse.data,
    role: 1 /* USER */,
    redirectTo: "/"
  }) : badRequest({
    fieldErrors: {
      email: userResponse.message
    }
  });
};
function Register() {
  var _a, _b, _c, _d;
  let transition = (0, import_react13.useTransition)(), actionData = (0, import_react13.useActionData)(), isSubmitting = transition.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900", children: "Register" }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: [
        "Have an account already?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core24.Anchor, { component: import_react13.Link, to: "/login", size: "sm", prefetch: "intent", children: "Sign in" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 59,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Form, { replace: !0, method: "post", className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core24.TextInput,
        {
          name: "name",
          autoComplete: "given-name",
          label: "Name",
          error: (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.name,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 71,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core24.TextInput,
        {
          name: "email",
          type: "email",
          autoComplete: "email",
          label: "Email address",
          error: (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 79,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core24.PasswordInput,
        {
          name: "password",
          label: "Password",
          error: (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.password,
          autoComplete: "current-password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 88,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core24.PasswordInput,
        {
          name: "confirmPassword",
          label: "Confirm password",
          error: (_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password,
          autoComplete: "current-password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 96,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core24.Button,
        {
          type: "submit",
          loading: isSubmitting,
          fullWidth: !0,
          loaderPosition: "right",
          mt: "1rem",
          children: "Register"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 104,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 69,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => Login
});
var import_core25 = require("@mantine/core"), import_react14 = require("@remix-run/react");
var React5 = __toESM(require("react")), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(request, LoginSchema2);
  if (fieldErrors)
    return badRequest({ fieldErrors });
  let { email: email2, password: password2, redirectTo, remember, role } = fields, loginResponse = await verifyLogin({ email: email2, password: password2, role });
  return loginResponse.success ? createUserSession({
    request,
    userId: loginResponse.data,
    role,
    remember: remember === "on",
    redirectTo: safeRedirect(redirectTo)
  }) : badRequest({
    fieldErrors: {
      password: loginResponse.message
    }
  });
};
function Login() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react14.useSearchParams)(), fetcher = (0, import_react14.useFetcher)(), [role, setRole] = React5.useState(1 /* USER */), redirectTo = searchParams.get("redirectTo") || "/", isSubmitting = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900", children: "Sign in" }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 66,
        columnNumber: 5
      }, this),
      role === 1 /* USER */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: [
        "Do not have an account yet?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core25.Anchor, { component: import_react14.Link, to: "/register", size: "sm", prefetch: "intent", children: "Create account" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 68,
        columnNumber: 6
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 65,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(fetcher.Form, { method: "post", replace: !0, className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_core25.SegmentedControl,
          {
            fullWidth: !0,
            name: "role",
            mb: 12,
            value: role.toString(),
            onChange: (role2) => setRole(parseInt(role2)),
            data: Object.values(UserRole).filter((value) => typeof value == "number").map((role2) => ({
              label: userRoleLookup(role2),
              value: role2.toString()
            }))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 81,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_core25.TextInput,
          {
            name: "email",
            type: "email",
            autoComplete: "email",
            label: "Email address",
            error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.email,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 95,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_core25.PasswordInput,
          {
            name: "password",
            label: "Password",
            error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.password,
            autoComplete: "current-password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 104,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core25.Group, { position: "apart", mt: "1rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core25.Switch, { id: "remember-me", name: "rememberMe", label: "Remember me" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 112,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_core25.Button,
          {
            type: "submit",
            loading: isSubmitting,
            fullWidth: !0,
            loaderPosition: "right",
            mt: "1rem",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 116,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 80,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 77,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 64,
    columnNumber: 3
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => AppLayout4,
  loader: () => loader13
});
var import_solid10 = require("@heroicons/react/24/solid"), import_core26 = require("@mantine/core"), import_node15 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node15.redirect)("/student") : await isOrganizer(request) ? (0, import_node15.redirect)("/organizer") : await isSuperAdmin(request) ? (0, import_node15.redirect)("/super-admin") : (0, import_node15.json)({}));
function AppLayout4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(HeaderComponent4, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.ScrollArea, { classNames: { root: "flex-1 bg-gray-100" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Content4, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 39,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 35,
    columnNumber: 3
  }, this);
}
function HeaderComponent4() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react15.Form, { replace: !0, action: "/api/auth/logout", method: "post", id: "logout-form" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("header", { className: "h-[100px] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-full w-full items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-shrink-0 items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Anchor, { component: import_react15.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "img",
        {
          className: "h-16 object-cover object-center",
          src: app_config_default.logo,
          alt: "Logo"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 58,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 57,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Menu, { position: "bottom-start", withArrow: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Avatar, { color: "blue", size: "md", children: user.name.charAt(0) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 71,
          columnNumber: 12
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Avatar, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 75,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 69,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Menu.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Menu.Item, { disabled: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: user.name }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 83,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-0.5 text-sm", children: user.email }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 84,
              columnNumber: 12
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 81,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core26.Divider, {}, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 87,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_core26.Menu.Item,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_solid10.ArrowLeftOnRectangleIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, this),
              type: "submit",
              form: "logout-form",
              children: "Logout"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.tsx",
              lineNumber: 89,
              columnNumber: 10
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 67,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 51,
    columnNumber: 3
  }, this);
}
function Content4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 109,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 108,
    columnNumber: 3
  }, this);
}

// app/routes/admin/organizers.tsx
var organizers_exports = {};
__export(organizers_exports, {
  action: () => action6,
  default: () => ManageOrganizers,
  loader: () => loader14
});
var import_solid11 = require("@heroicons/react/24/solid"), import_core27 = require("@mantine/core"), import_hooks7 = require("@mantine/hooks"), import_node16 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), React6 = __toESM(require("react")), import_zod15 = require("zod");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), AddOrganizerSchema = import_zod15.z.object({
  name: import_zod15.z.string().min(1, "Name is required"),
  email: import_zod15.z.string().email("Invalid email").min(1, "Email is required"),
  password: import_zod15.z.string().min(8, "Password must be at least 8 characters long")
}), loader14 = async () => {
  let usersResponse = await getAllUsers();
  if (!usersResponse.success)
    return (0, import_node16.json)({
      organizers: []
    });
  let organizers = usersResponse.data.filter(
    (user) => user.role === 2 /* ORGANIZER */
  );
  return (0, import_node16.json)({ organizers });
}, action6 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    AddOrganizerSchema
  );
  return fieldErrors ? badRequest({ success: !1, fieldErrors }) : (await createUser({
    ...fields,
    role: 2 /* ORGANIZER */
  }), (0, import_node16.json)({ success: !0 }));
};
function ManageOrganizers() {
  var _a, _b, _c, _d, _e, _f, _g;
  let fetcher = (0, import_react16.useFetcher)(), { organizers } = (0, import_react16.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks7.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React6.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core27.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_solid11.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 88,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react16.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 87,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Manage Organizers" }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 99,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Manage the organizers" }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 102,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          import_core27.Button,
          {
            loading: isSubmitting,
            loaderPosition: "left",
            onClick: () => handleModal.open(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_solid11.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 112,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "ml-2", children: "Add Organizer" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 113,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 107,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 85,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 123,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 130,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 137,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 121,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: organizers.map((organizer) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: organizer.name }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: organizer.email }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0" }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ] }, organizer.id, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 145,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 143,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 119,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 117,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 83,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_core27.Modal,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Organizer",
        centered: !0,
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core27.TextInput,
            {
              name: "name",
              label: "Name",
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 172,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core27.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.email,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 179,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_core27.PasswordInput,
            {
              name: "password",
              label: "Password",
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.password,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 187,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              import_core27.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => handleModal.close(),
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 195,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              import_core27.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Add Organizer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 203,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 194,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 171,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 170,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 163,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/organizers.tsx",
    lineNumber: 82,
    columnNumber: 3
  }, this);
}

// app/routes/admin/stadiums.tsx
var stadiums_exports = {};
__export(stadiums_exports, {
  action: () => action7,
  default: () => ManageStadium,
  loader: () => loader15
});
var import_solid12 = require("@heroicons/react/24/solid"), import_core28 = require("@mantine/core"), import_hooks8 = require("@mantine/hooks"), import_node17 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), React7 = __toESM(require("react")), import_zod16 = require("zod");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
var ManageStadiumSchema = import_zod16.z.object({
  stadiumId: import_zod16.z.string().optional(),
  name: import_zod16.z.string().min(1, "Name is required"),
  address: import_zod16.z.string().min(1, "Abbreviation is required"),
  capacity: import_zod16.z.string().transform(Number)
}), loader15 = async () => {
  let stadiumResponse = await getAllStadiums();
  if (!stadiumResponse.success)
    return (0, import_node17.json)({ stadiums: [] });
  let stadiums = stadiumResponse.data;
  return (0, import_node17.json)({ stadiums });
}, action7 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    ManageStadiumSchema
  );
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  let { stadiumId, ...rest } = fields;
  return stadiumId ? (await updateStadium(stadiumId, rest), (0, import_node17.json)({ success: !0 })) : (await createStadium({ ...rest }), (0, import_node17.json)({ success: !0 }));
};
function ManageStadium() {
  var _a, _b, _c, _d, _e, _f, _g;
  let fetcher = (0, import_react17.useFetcher)(), { stadiums } = (0, import_react17.useLoaderData)(), [selectedStadiumId, setSelectedStadiumId] = React7.useState(null), [selectedStadium, setSelectedStadium] = React7.useState(
    null
  ), [mode, setMode] = React7.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks8.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React7.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && (setSelectedStadiumId(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), React7.useEffect(() => {
    if (!selectedStadiumId) {
      setSelectedStadium(null);
      return;
    }
    let stadium = stadiums.find((stadium2) => stadium2.id === selectedStadiumId);
    stadium && (setSelectedStadium(stadium), handleModal.open());
  }, [stadiums, selectedStadiumId]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_solid12.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react17.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 126,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Manage Stadiums" }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 138,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Manage the stadiums that are available for selection when an organizer creates an event." }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 141,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_core28.Button,
          {
            loading: isSubmitting,
            loaderPosition: "left",
            onClick: () => {
              setMode(1 /* add */), handleModal.open();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_solid12.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 155,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-2", children: "Add Stadium" }, void 0, !1, {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 156,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 147,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 146,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 124,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 166,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 173,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Capacity"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 180,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 187,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 164,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: stadiums.map((stadium) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: stadium.name }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: stadium.address }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: stadium.capacity }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              loaderPosition: "right",
              onClick: () => {
                setSelectedStadiumId(stadium.id), setMode(0 /* edit */);
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 207,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 206,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this)
        ] }, stadium.id, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 195,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 193,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 162,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 161,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 160,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/stadiums.tsx",
      lineNumber: 123,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/stadiums.tsx",
      lineNumber: 122,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core28.Modal,
      {
        opened: isModalOpen,
        onClose: () => {
          setSelectedStadiumId(null), handleModal.close();
        },
        title: (0, import_core28.clsx)({
          "Edit stadium": mode === 0 /* edit */,
          "Add stadium": mode === 1 /* add */
        }),
        centered: !0,
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", name: "stadiumId", value: selectedStadium == null ? void 0 : selectedStadium.id }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 245,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.TextInput,
            {
              name: "name",
              label: "Name",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.name,
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 247,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.Textarea,
            {
              name: "address",
              label: "Address",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.name,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 255,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.NumberInput,
            {
              name: "capacity",
              label: "Max Capacity",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.capacity,
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.capacity,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 263,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => {
                  setSelectedStadium(null), handleModal.close();
                },
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 272,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add stadium"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 283,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 271,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 244,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 243,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 230,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/stadiums.tsx",
    lineNumber: 121,
    columnNumber: 3
  }, this);
}

// app/routes/admin/students.tsx
var students_exports = {};
__export(students_exports, {
  action: () => action8,
  default: () => ManageOrganizers2,
  loader: () => loader16
});
var import_solid13 = require("@heroicons/react/24/solid"), import_core29 = require("@mantine/core"), import_hooks9 = require("@mantine/hooks"), import_node18 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), React8 = __toESM(require("react")), import_zod17 = require("zod");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), AddStudentSchema = import_zod17.z.object({
  name: import_zod17.z.string().min(1, "Name is required"),
  email: import_zod17.z.string().email("Invalid email").min(1, "Email is required"),
  password: import_zod17.z.string().min(8, "Password must be at least 8 characters long")
}), loader16 = async () => {
  let usersResponse = await getAllUsers();
  if (!usersResponse.success)
    return (0, import_node18.json)({ students: [] });
  let students = usersResponse.data.filter(
    (user) => user.role === 1 /* USER */
  );
  return (0, import_node18.json)({ students });
}, action8 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, AddStudentSchema);
  return fieldErrors ? badRequest({ success: !1, fieldErrors }) : (await createUser({
    ...fields,
    role: 1 /* USER */
  }), (0, import_node18.json)({ success: !0 }));
};
function ManageOrganizers2() {
  var _a, _b, _c, _d, _e, _f, _g;
  let fetcher = (0, import_react18.useFetcher)(), { students } = (0, import_react18.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks9.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React8.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core29.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid13.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 83,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react18.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 82,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Manage Students" }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 94,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Manage the students who can access the app." }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 97,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core29.Button,
          {
            loading: isSubmitting,
            loaderPosition: "left",
            onClick: () => handleModal.open(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid13.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 107,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "ml-2", children: "Add Student" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 108,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 102,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 118,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 125,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 132,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 116,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: students.map((student) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: student.name }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: student.email }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 144,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0" }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this)
        ] }, student.id, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 140,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 138,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 114,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 112,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 79,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 78,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      import_core29.Modal,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Student",
        centered: !0,
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core29.TextInput,
            {
              name: "name",
              label: "Name",
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 167,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core29.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.email,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 174,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core29.PasswordInput,
            {
              name: "password",
              label: "Password",
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.password,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 182,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => handleModal.close(),
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 190,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Add Student"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 198,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 189,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 166,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 165,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 158,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/students.tsx",
    lineNumber: 77,
    columnNumber: 3
  }, this);
}

// app/routes/admin/sports.tsx
var sports_exports = {};
__export(sports_exports, {
  action: () => action9,
  default: () => ManageStadium2,
  loader: () => loader17
});
var import_solid14 = require("@heroicons/react/24/solid"), import_core30 = require("@mantine/core"), import_hooks10 = require("@mantine/hooks"), import_node19 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), React9 = __toESM(require("react")), import_zod18 = require("zod");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
var ManageSportSchema = import_zod18.z.object({
  sportId: import_zod18.z.string().optional(),
  name: import_zod18.z.string().min(1, "Name is required"),
  description: import_zod18.z.string().min(1, "Description is required")
}), loader17 = async () => {
  let sportsResponse = await getAllSports();
  if (!sportsResponse.success)
    return (0, import_node19.json)({ sports: [] });
  let sports = sportsResponse.data;
  return (0, import_node19.json)({ sports });
}, action9 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, ManageSportSchema);
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  let { sportId, ...rest } = fields;
  return sportId ? (await updateSport(sportId, rest), (0, import_node19.json)({ success: !0 })) : (await createSport({ ...rest }), (0, import_node19.json)({ success: !0 }));
};
function ManageStadium2() {
  var _a, _b, _c, _d, _e;
  let fetcher = (0, import_react19.useFetcher)(), { sports } = (0, import_react19.useLoaderData)(), [selectedSportId, setSelectedSportId] = React9.useState(null), [selectedSport, setSelectedSport] = React9.useState(null), [mode, setMode] = React9.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks10.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React9.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && (setSelectedSportId(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), React9.useEffect(() => {
    if (!selectedSportId) {
      setSelectedSport(null);
      return;
    }
    let sport = sports.find((sport2) => sport2.id === selectedSportId);
    sport && (setSelectedSport(sport), handleModal.open());
  }, [sports, selectedSportId]), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-8 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "sm:flex sm:flex-auto sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core30.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_solid14.ArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/sports.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this),
              variant: "white",
              size: "md",
              component: import_react19.Link,
              to: "..",
              pl: 0,
              mb: 20,
              color: "gray",
              children: "Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 109,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-3xl font-semibold text-gray-900", children: "Manage Sports" }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 121,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Manage the sports that are available for selection when an organizer creates an event." }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 124,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          import_core30.Button,
          {
            loading: isSubmitting,
            loaderPosition: "left",
            onClick: () => {
              setMode(1 /* add */), handleModal.open();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_solid14.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/routes/admin/sports.tsx",
                lineNumber: 138,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "ml-2", children: "Add Sport" }, void 0, !1, {
                fileName: "app/routes/admin/sports.tsx",
                lineNumber: 139,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 130,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 107,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 149,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Description"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 156,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 163,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 147,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: sports.map((sport) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: sport.name }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: sport.description }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core30.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              loaderPosition: "right",
              onClick: () => {
                setSelectedSportId(sport.id), setMode(0 /* edit */);
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 180,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 179,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this)
        ] }, sport.id, !0, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 171,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 169,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 145,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 144,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 143,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/sports.tsx",
      lineNumber: 106,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/sports.tsx",
      lineNumber: 105,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_core30.Modal,
      {
        opened: isModalOpen,
        onClose: () => {
          setSelectedSportId(null), handleModal.close();
        },
        title: (0, import_core30.clsx)({
          "Edit sport": mode === 0 /* edit */,
          "Add sport": mode === 1 /* add */
        }),
        centered: !0,
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "sportId", value: selectedSport == null ? void 0 : selectedSport.id }, void 0, !1, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 218,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core30.TextInput,
            {
              name: "name",
              label: "Name",
              defaultValue: selectedSport == null ? void 0 : selectedSport.name,
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 220,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_core30.Textarea,
            {
              name: "description",
              label: "Description",
              defaultValue: selectedSport == null ? void 0 : selectedSport.name,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.name,
              rows: 4,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/sports.tsx",
              lineNumber: 228,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              import_core30.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => {
                  setSelectedSport(null), handleModal.close();
                },
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/sports.tsx",
                lineNumber: 238,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              import_core30.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add sport"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/sports.tsx",
                lineNumber: 249,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/sports.tsx",
            lineNumber: 237,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 217,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/sports.tsx",
          lineNumber: 216,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/sports.tsx",
        lineNumber: 203,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/sports.tsx",
    lineNumber: 104,
    columnNumber: 3
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminDashboard,
  loader: () => loader18
});
var import_solid15 = require("@heroicons/react/24/solid"), import_node20 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_clsx3 = __toESM(require("clsx"));
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), actions3 = [
  {
    title: "Students",
    description: "View and manage students",
    href: "students",
    icon: import_solid15.UserGroupIcon
  },
  {
    title: "Organizers",
    description: "View and manage organizers",
    href: "organizers",
    icon: import_solid15.UserGroupIcon
  },
  {
    title: "Stadiums",
    description: "View and manage stadiums",
    href: "stadiums",
    icon: import_solid15.BuildingOfficeIcon
  },
  {
    title: "Sports",
    description: "View and manage sports",
    href: "sports",
    icon: import_solid15.BookmarkIcon
  }
], loader18 = async ({ request }) => (await requireUserId(request), (0, import_node20.json)({}));
function AdminDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col gap-4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(TailwindContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "px-4 py-16 sm:px-6 sm:py-20 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-2xl font-extrabold tracking-tight text-gray-900", children: "Admin Dashboard" }, void 0, !1, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0", children: actions3.map((action10, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Card3, { action: action10, actionIdx }, actionIdx, !1, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 50,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 48,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 47,
    columnNumber: 3
  }, this);
}
function Card3({
  action: action10,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "div",
    {
      className: (0, import_clsx3.default)(
        actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
        actionIdx === actions3.length - 2 ? "sm:rounded-bl-lg" : "",
        actionIdx === actions3.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "span",
          {
            className: (0, import_clsx3.default)(
              "text-blue-700",
              "bg-blue-50",
              "inline-flex rounded-lg p-3 ring-4 ring-white"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(action10.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 95,
              columnNumber: 6
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 88,
            columnNumber: 5
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 87,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-lg font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react20.Link, { to: action10.href, className: "focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 102,
              columnNumber: 7
            }, this),
            action10.title
          ] }, void 0, !0, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 100,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 99,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: action10.description }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 106,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 98,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "span",
          {
            className: "pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "svg",
              {
                className: "h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 118,
                  columnNumber: 6
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 112,
                columnNumber: 5
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 108,
            columnNumber: 4
          },
          this
        )
      ]
    },
    action10.title,
    !0,
    {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 75,
      columnNumber: 3
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6QJTJC2M.js", imports: ["/build/_shared/chunk-544ZDYIP.js", "/build/_shared/chunk-XN3TK5BG.js", "/build/_shared/chunk-QKSMZIXN.js", "/build/_shared/chunk-RBEN53O4.js", "/build/_shared/chunk-532K2VPY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CZCJWTBW.js", imports: ["/build/_shared/chunk-PY4YBNSZ.js", "/build/_shared/chunk-IE73M25N.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-NTIA6BNH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-DMGK5KZ6.js", imports: ["/build/_shared/chunk-D76DKGGR.js", "/build/_shared/chunk-VUHIJM2V.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/register": { id: "routes/__auth/register", parentId: "routes/__auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/register-DD3NYJRT.js", imports: ["/build/_shared/chunk-D76DKGGR.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student": { id: "routes/__student", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__student-7SQ5ZYB3.js", imports: ["/build/_shared/chunk-4L6ZWL6N.js", "/build/_shared/chunk-BD2S4MH4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/events": { id: "routes/__student/events", parentId: "routes/__student", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/__student/events-LZ7BMMDP.js", imports: ["/build/_shared/chunk-IG5NOOXG.js", "/build/_shared/chunk-CNYPCDDN.js", "/build/_shared/chunk-VUHIJM2V.js", "/build/_shared/chunk-MBC2BCBF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/index": { id: "routes/__student/index", parentId: "routes/__student", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__student/index-H5MASDCZ.js", imports: ["/build/_shared/chunk-SVE4BIPR.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/my-events": { id: "routes/__student/my-events", parentId: "routes/__student", path: "my-events", index: void 0, caseSensitive: void 0, module: "/build/routes/__student/my-events-EHDGULDP.js", imports: ["/build/_shared/chunk-IG5NOOXG.js", "/build/_shared/chunk-PY4YBNSZ.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-CNYPCDDN.js", "/build/_shared/chunk-VUHIJM2V.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-M2XZYKLM.js", imports: ["/build/_shared/chunk-4L6ZWL6N.js", "/build/_shared/chunk-BD2S4MH4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-UKOHSAAV.js", imports: ["/build/_shared/chunk-SVE4BIPR.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/organizers": { id: "routes/admin/organizers", parentId: "routes/admin", path: "organizers", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/organizers-PLYGYW2G.js", imports: ["/build/_shared/chunk-D76DKGGR.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/sports": { id: "routes/admin/sports", parentId: "routes/admin", path: "sports", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/sports-APB3DZVX.js", imports: ["/build/_shared/chunk-MOLMZNR6.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-NMSJT5PF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/stadiums": { id: "routes/admin/stadiums", parentId: "routes/admin", path: "stadiums", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/stadiums-LXE3KCVS.js", imports: ["/build/_shared/chunk-WTBKTKAG.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-NMSJT5PF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/students": { id: "routes/admin/students", parentId: "routes/admin", path: "students", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/students-AVUF3QPY.js", imports: ["/build/_shared/chunk-D76DKGGR.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/logout": { id: "routes/api/auth/logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/logout-7MZMH3CL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer": { id: "routes/organizer", parentId: "root", path: "organizer", index: void 0, caseSensitive: void 0, module: "/build/routes/organizer-7FGHBE43.js", imports: ["/build/_shared/chunk-4L6ZWL6N.js", "/build/_shared/chunk-BD2S4MH4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer/events": { id: "routes/organizer/events", parentId: "routes/organizer", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/organizer/events-RLMKVDTN.js", imports: ["/build/_shared/chunk-WTBKTKAG.js", "/build/_shared/chunk-MOLMZNR6.js", "/build/_shared/chunk-HQ3FDFHV.js", "/build/_shared/chunk-CNYPCDDN.js", "/build/_shared/chunk-VUHIJM2V.js", "/build/_shared/chunk-NMSJT5PF.js", "/build/_shared/chunk-MBC2BCBF.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer/index": { id: "routes/organizer/index", parentId: "routes/organizer", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/organizer/index-OGWBBN3Z.js", imports: ["/build/_shared/chunk-SVE4BIPR.js", "/build/_shared/chunk-DJKCM2T7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/super-admin": { id: "routes/super-admin", parentId: "root", path: "super-admin", index: void 0, caseSensitive: void 0, module: "/build/routes/super-admin-U4N6BDQR.js", imports: ["/build/_shared/chunk-4L6ZWL6N.js", "/build/_shared/chunk-BD2S4MH4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/super-admin/index": { id: "routes/super-admin/index", parentId: "routes/super-admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/super-admin/index-DY6P53YW.js", imports: ["/build/_shared/chunk-DJKCM2T7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "4b5270d0", hmr: void 0, url: "/build/manifest-4B5270D0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/auth/logout": {
    id: "routes/api/auth/logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/super-admin": {
    id: "routes/super-admin",
    parentId: "root",
    path: "super-admin",
    index: void 0,
    caseSensitive: void 0,
    module: super_admin_exports
  },
  "routes/super-admin/index": {
    id: "routes/super-admin/index",
    parentId: "routes/super-admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: super_admin_exports2
  },
  "routes/organizer": {
    id: "routes/organizer",
    parentId: "root",
    path: "organizer",
    index: void 0,
    caseSensitive: void 0,
    module: organizer_exports
  },
  "routes/organizer/events": {
    id: "routes/organizer/events",
    parentId: "routes/organizer",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: events_exports
  },
  "routes/organizer/index": {
    id: "routes/organizer/index",
    parentId: "routes/organizer",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: organizer_exports2
  },
  "routes/__student": {
    id: "routes/__student",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: student_exports
  },
  "routes/__student/my-events": {
    id: "routes/__student/my-events",
    parentId: "routes/__student",
    path: "my-events",
    index: void 0,
    caseSensitive: void 0,
    module: my_events_exports
  },
  "routes/__student/events": {
    id: "routes/__student/events",
    parentId: "routes/__student",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: events_exports2
  },
  "routes/__student/index": {
    id: "routes/__student/index",
    parentId: "routes/__student",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: student_exports2
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/register": {
    id: "routes/__auth/register",
    parentId: "routes/__auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/organizers": {
    id: "routes/admin/organizers",
    parentId: "routes/admin",
    path: "organizers",
    index: void 0,
    caseSensitive: void 0,
    module: organizers_exports
  },
  "routes/admin/stadiums": {
    id: "routes/admin/stadiums",
    parentId: "routes/admin",
    path: "stadiums",
    index: void 0,
    caseSensitive: void 0,
    module: stadiums_exports
  },
  "routes/admin/students": {
    id: "routes/admin/students",
    parentId: "routes/admin",
    path: "students",
    index: void 0,
    caseSensitive: void 0,
    module: students_exports
  },
  "routes/admin/sports": {
    id: "routes/admin/sports",
    parentId: "routes/admin",
    path: "sports",
    index: void 0,
    caseSensitive: void 0,
    module: sports_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

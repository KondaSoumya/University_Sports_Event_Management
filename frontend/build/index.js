var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
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
var import_core13 = require("@mantine/core"), import_modals = require("@mantine/modals"), import_remix2 = require("@mantine/remix"), import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app.config.ts
var appConfig = {
  name: "University Sports Event Management System",
  logo: "/logo.png"
}, app_config_default = appConfig;

// app/root.tsx
var import_sonner = require("sonner");

// app/session.server.ts
var import_node = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/lib/user.server.ts
var import_core12 = require("@zodios/core");

// app/lib/zodios/api-client.server.ts
var import_core11 = require("@zodios/core"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/zodios/auth-api.ts
var import_core2 = require("@zodios/core"), import_zod3 = require("zod");

// app/lib/zodios/common.ts
var import_zod = require("zod"), UuidSchema = import_zod.z.string(), AddressSchema = import_zod.z.object({
  addressLine1: import_zod.z.string().min(1, { message: "Address line 1 is required" }),
  addressLine2: import_zod.z.string().optional(),
  city: import_zod.z.string().min(1, { message: "City is required" }),
  state: import_zod.z.string().min(1, { message: "State is required" }),
  zipCode: import_zod.z.string().min(1, { message: "Zip is required" })
});

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
  },
  {
    method: "post",
    path: "/Auth/SendResetPasswordEmail",
    alias: "sendResetPasswordEmail",
    description: "Send Reset Password Email",
    response: import_zod3.z.object({
      data: import_zod3.z.boolean(),
      message: import_zod3.z.string(),
      success: import_zod3.z.boolean()
    }),
    parameters: [
      {
        name: "reset-password-user",
        type: "Body",
        schema: import_zod3.z.object({
          email: import_zod3.z.string().email()
        })
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
  isActive: import_zod4.z.boolean(),
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
      capacity: import_zod4.z.number()
    }).merge(AddressSchema),
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
      data: UuidSchema.nullable(),
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
      data: UuidSchema.nullable(),
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
  },
  {
    method: "delete",
    path: "/Event/:id",
    alias: "cancelEvent",
    description: "Cancel an event",
    response: import_zod4.z.object({
      data: import_zod4.z.boolean(),
      message: import_zod4.z.string(),
      success: import_zod4.z.boolean()
    }),
    errors
  }
]);

// app/lib/zodios/general-event-api.ts
var import_core4 = require("@zodios/core"), import_zod5 = require("zod");
var GeneralEventSchema = import_zod5.z.object({
  id: UuidSchema,
  name: import_zod5.z.string(),
  description: import_zod5.z.string(),
  startDateTime: import_zod5.z.string(),
  capacity: import_zod5.z.number().int().min(0),
  endDateTime: import_zod5.z.string(),
  isActive: import_zod5.z.boolean(),
  organizerId: import_zod5.z.string(),
  createdAt: import_zod5.z.string(),
  updatedAt: import_zod5.z.string()
}).merge(AddressSchema), CreateGeneralEventSchema = GeneralEventSchema.pick({
  name: !0,
  description: !0,
  startDateTime: !0,
  endDateTime: !0,
  capacity: !0,
  organizerId: !0
}).merge(AddressSchema), GetGeneralEventSchema = GeneralEventSchema.omit({
  organizerId: !0
}).merge(
  import_zod5.z.object({
    capacity: import_zod5.z.number().int(),
    reservedSeats: import_zod5.z.number().int(),
    organizer: import_zod5.z.object({
      id: UuidSchema,
      name: import_zod5.z.string(),
      email: import_zod5.z.string().email(),
      role: import_zod5.z.number(),
      isActive: import_zod5.z.boolean()
    })
  })
), UpdateGeneralEventSchema = GeneralEventSchema.pick({
  name: !0,
  description: !0,
  startDateTime: !0,
  endDateTime: !0,
  capacity: !0
}).merge(AddressSchema), generalEventApi = (0, import_core4.makeApi)([
  {
    method: "get",
    path: "/GeneralEvent/GetAll",
    alias: "getAllGeneralEvents",
    description: "Get all general events",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetGeneralEventSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/GeneralEvent/GetById/:id",
    alias: "getGeneralEventById",
    description: "Get a general event by id",
    response: import_zod5.z.object({
      data: GetGeneralEventSchema,
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/GeneralEvent/GetEventsByOrganizerId/:organizerId",
    alias: "getGeneralEventsByOrganizerId",
    description: "Get general events by organizer id",
    response: import_zod5.z.object({
      data: import_zod5.z.array(GetGeneralEventSchema),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/GeneralEvent",
    alias: "createGeneralEvent",
    description: "Create a general event",
    response: import_zod5.z.object({
      data: UuidSchema.nullable(),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    parameters: [
      {
        name: "event",
        type: "Body",
        schema: CreateGeneralEventSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/GeneralEvent/:id",
    alias: "updateGeneralEvent",
    description: "Update a general event",
    response: import_zod5.z.object({
      data: UuidSchema.nullable(),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    parameters: [
      {
        name: "update-general-event",
        type: "Body",
        schema: UpdateGeneralEventSchema
      }
    ],
    errors
  },
  {
    method: "delete",
    path: "/GeneralEvent/:id",
    alias: "cancelGeneralEvent",
    description: "Cancel a general event",
    response: import_zod5.z.object({
      data: import_zod5.z.boolean(),
      message: import_zod5.z.string(),
      success: import_zod5.z.boolean()
    }),
    errors
  }
]);

// app/lib/zodios/general-reservation-api.ts
var import_core5 = require("@zodios/core"), import_zod6 = require("zod");
var GeneralReservationSchema = import_zod6.z.object({
  id: UuidSchema,
  seatNumber: import_zod6.z.string(),
  isCancelled: import_zod6.z.boolean(),
  eventId: UuidSchema,
  studentId: UuidSchema
}), CreateGeneralReservationSchema = GeneralReservationSchema.pick({
  eventId: !0,
  studentId: !0
}), GetEventGeneralReservationSchema = GeneralReservationSchema.pick({
  id: !0,
  seatNumber: !0,
  isCancelled: !0
}).merge(
  import_zod6.z.object({
    event: import_zod6.z.object({
      id: UuidSchema,
      name: import_zod6.z.string(),
      description: import_zod6.z.string(),
      startDateTime: import_zod6.z.string(),
      endDateTime: import_zod6.z.string(),
      isActive: import_zod6.z.boolean()
    }),
    student: import_zod6.z.object({
      id: UuidSchema,
      name: import_zod6.z.string(),
      email: import_zod6.z.string().email(),
      role: import_zod6.z.number(),
      isActive: import_zod6.z.boolean()
    })
  })
), GetStudentGeneralReservationSchema = GeneralReservationSchema.pick({
  id: !0,
  seatNumber: !0,
  isCancelled: !0
}).merge(
  import_zod6.z.object({
    event: import_zod6.z.object({
      id: UuidSchema,
      name: import_zod6.z.string(),
      description: import_zod6.z.string(),
      startDateTime: import_zod6.z.string(),
      endDateTime: import_zod6.z.string()
    })
  })
), generalReservationApi = (0, import_core5.makeApi)([
  {
    method: "get",
    path: "/GeneralReservation/Event/:eventId",
    alias: "getGeneralReservationsByEventId",
    description: "Get all general reservations by event id",
    response: import_zod6.z.object({
      data: import_zod6.z.array(GetEventGeneralReservationSchema),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/GeneralReservation/Event/:eventId/active",
    alias: "getActiveGeneralReservationsByEventId",
    description: "Get active general reservations by event id",
    response: import_zod6.z.object({
      data: import_zod6.z.array(GetEventGeneralReservationSchema),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/GeneralReservation/Student/:studentId",
    alias: "getGeneralReservationsByStudentId",
    description: "Get all general reservations by student id",
    response: import_zod6.z.object({
      data: import_zod6.z.array(GetStudentGeneralReservationSchema),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/GeneralReservation/Student/:studentId/active",
    alias: "getActiveGeneralReservationsByStudentId",
    description: "Get active general reservations by student id",
    response: import_zod6.z.object({
      data: import_zod6.z.array(GetStudentGeneralReservationSchema),
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "delete",
    path: "/GeneralReservation/:reservationId",
    alias: "cancelGeneralReservation",
    description: "Cancel a general reservation",
    response: import_zod6.z.object({
      data: UuidSchema,
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/GeneralReservation",
    alias: "createGeneralReservation",
    description: "Create a general reservation",
    response: import_zod6.z.object({
      data: UuidSchema,
      message: import_zod6.z.string(),
      success: import_zod6.z.boolean()
    }),
    parameters: [
      {
        name: "general-reservation",
        type: "Body",
        schema: CreateGeneralReservationSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/reservation-api.ts
var import_core6 = require("@zodios/core"), import_zod7 = require("zod");
var ReservationSchema = import_zod7.z.object({
  id: UuidSchema,
  seatNumber: import_zod7.z.string(),
  isCancelled: import_zod7.z.boolean(),
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
  import_zod7.z.object({
    event: import_zod7.z.object({
      id: UuidSchema,
      name: import_zod7.z.string(),
      description: import_zod7.z.string(),
      startDateTime: import_zod7.z.string(),
      endDateTime: import_zod7.z.string(),
      isActive: import_zod7.z.boolean()
    }),
    student: import_zod7.z.object({
      id: UuidSchema,
      name: import_zod7.z.string(),
      email: import_zod7.z.string().email(),
      role: import_zod7.z.number(),
      isActive: import_zod7.z.boolean()
    })
  })
), GetStudentReservationSchema = ReservationSchema.pick({
  id: !0,
  seatNumber: !0,
  isCancelled: !0
}).merge(
  import_zod7.z.object({
    event: import_zod7.z.object({
      id: UuidSchema,
      name: import_zod7.z.string(),
      description: import_zod7.z.string(),
      startDateTime: import_zod7.z.string(),
      endDateTime: import_zod7.z.string()
    })
  })
), reservationApi = (0, import_core6.makeApi)([
  {
    method: "get",
    path: "/Reservation/Event/:eventId",
    alias: "getReservationsByEventId",
    description: "Get all reservations by event id",
    response: import_zod7.z.object({
      data: import_zod7.z.array(GetEventReservationSchema),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Event/:eventId/active",
    alias: "getActiveReservationsByEventId",
    description: "Get active reservations by event id",
    response: import_zod7.z.object({
      data: import_zod7.z.array(GetEventReservationSchema),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Student/:studentId",
    alias: "getReservationsByStudentId",
    description: "Get all reservations by student id",
    response: import_zod7.z.object({
      data: import_zod7.z.array(GetStudentReservationSchema),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Reservation/Student/:studentId/active",
    alias: "getActiveReservationsByStudentId",
    description: "Get active reservations by student id",
    response: import_zod7.z.object({
      data: import_zod7.z.array(GetStudentReservationSchema),
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "delete",
    path: "/Reservation/:reservationId",
    alias: "cancelReservation",
    description: "Cancel a reservation",
    response: import_zod7.z.object({
      data: UuidSchema,
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Reservation",
    alias: "createReservation",
    description: "Create a reservation",
    response: import_zod7.z.object({
      data: UuidSchema,
      message: import_zod7.z.string(),
      success: import_zod7.z.boolean()
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
var import_core7 = require("@zodios/core"), import_zod8 = require("zod");
var SportSchema = import_zod8.z.object({
  id: UuidSchema,
  name: import_zod8.z.string(),
  description: import_zod8.z.string(),
  createdAt: import_zod8.z.string(),
  updatedAt: import_zod8.z.string()
}), CreateSportSchema = SportSchema.pick({
  name: !0,
  description: !0
}), GetSportSchema = SportSchema.merge(
  import_zod8.z.object({
    teams: import_zod8.z.array(
      import_zod8.z.object({
        id: UuidSchema,
        name: import_zod8.z.string()
      })
    )
  })
), sportApi = (0, import_core7.makeApi)([
  {
    method: "get",
    path: "/Sport/GetAll",
    alias: "getAllSports",
    description: "Get all sports",
    response: import_zod8.z.object({
      data: import_zod8.z.array(GetSportSchema),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Sport/:id",
    alias: "getSportById",
    description: "Get a sport",
    response: import_zod8.z.object({
      data: GetSportSchema,
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Sport",
    alias: "createSport",
    response: import_zod8.z.object({
      data: UuidSchema.nullable(),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
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
    response: import_zod8.z.object({
      data: UuidSchema.nullable(),
      message: import_zod8.z.string(),
      success: import_zod8.z.boolean()
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
var import_core8 = require("@zodios/core"), import_zod9 = require("zod");
var StadiumSchema = import_zod9.z.object({
  id: UuidSchema,
  name: import_zod9.z.string(),
  capacity: import_zod9.z.number().int().min(0),
  createdAt: import_zod9.z.string(),
  updatedAt: import_zod9.z.string()
}).merge(AddressSchema), CreateStadiumSchema = StadiumSchema.pick({
  name: !0,
  capacity: !0
}).merge(AddressSchema), GetStadiumSchema = StadiumSchema.merge(
  import_zod9.z.object({
    events: import_zod9.z.array(
      import_zod9.z.object({
        id: UuidSchema,
        name: import_zod9.z.string(),
        description: import_zod9.z.string(),
        startDateTime: import_zod9.z.string(),
        endDateTime: import_zod9.z.string(),
        isActive: import_zod9.z.boolean()
      })
    )
  })
), stadiumApi = (0, import_core8.makeApi)([
  {
    method: "get",
    path: "/Stadium/GetAll",
    alias: "getAllStadiums",
    description: "Get all stadiums",
    response: import_zod9.z.object({
      data: import_zod9.z.array(GetStadiumSchema),
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Stadium/:id",
    alias: "getStadiumId",
    description: "Get a stadium",
    response: import_zod9.z.object({
      data: GetStadiumSchema,
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Stadium",
    alias: "createStadium",
    description: "Create a stadium",
    response: import_zod9.z.object({
      data: UuidSchema.nullable(),
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
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
    response: import_zod9.z.object({
      data: UuidSchema.nullable(),
      message: import_zod9.z.string(),
      success: import_zod9.z.boolean()
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
var import_core9 = require("@zodios/core"), import_zod10 = require("zod");
var TeamSchema = import_zod10.z.object({
  id: UuidSchema,
  name: import_zod10.z.string(),
  sportId: import_zod10.z.string(),
  createdAt: import_zod10.z.string(),
  updatedAt: import_zod10.z.string()
}), CreateTeamSchema = TeamSchema.pick({
  name: !0,
  sportId: !0
}), GetTeamSchema = TeamSchema.omit({
  sportId: !0
}).merge(
  import_zod10.z.object({
    sport: import_zod10.z.object({
      id: UuidSchema,
      name: import_zod10.z.string(),
      description: import_zod10.z.string()
    })
  })
), teamApi = (0, import_core9.makeApi)([
  {
    method: "get",
    path: "/Team/GetAll",
    alias: "getAllTeams",
    description: "Get all teams",
    response: import_zod10.z.object({
      data: import_zod10.z.array(GetTeamSchema),
      message: import_zod10.z.string(),
      success: import_zod10.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Team/GetById/:id",
    alias: "getTeamById",
    description: "Get a team",
    response: import_zod10.z.object({
      data: GetTeamSchema,
      message: import_zod10.z.string(),
      success: import_zod10.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/Team/GetTeamsBySportId/:sportId",
    alias: "getTeamsBySportId",
    description: "Get teams by sport id",
    response: import_zod10.z.object({
      data: import_zod10.z.array(GetTeamSchema),
      message: import_zod10.z.string(),
      success: import_zod10.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/Team",
    alias: "createTeam",
    description: "Create a team",
    response: import_zod10.z.object({
      data: UuidSchema.nullable(),
      message: import_zod10.z.string(),
      success: import_zod10.z.boolean()
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
    response: import_zod10.z.object({
      data: UuidSchema.nullable(),
      message: import_zod10.z.string(),
      success: import_zod10.z.boolean()
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
var import_core10 = require("@zodios/core"), import_zod11 = require("zod");
var UserSchema2 = import_zod11.z.object({
  id: UuidSchema,
  name: import_zod11.z.string(),
  email: import_zod11.z.string().email(),
  role: import_zod11.z.number().int().min(1).max(4),
  isActive: import_zod11.z.boolean(),
  createdAt: import_zod11.z.string(),
  updatedAt: import_zod11.z.string(),
  password: import_zod11.z.string()
}), UserAddressSchema = import_zod11.z.object({
  addressLine1: import_zod11.z.string().min(1, { message: "Address line 1 is required" }),
  addressLine2: import_zod11.z.string().optional(),
  city: import_zod11.z.string().min(1, { message: "City is required" }),
  state: import_zod11.z.string().min(1, { message: "State is required" }),
  zipCode: import_zod11.z.string().min(1, { message: "Zip is required" })
}), GetUserSchema = UserSchema2.omit({ password: !0 }).merge(UserAddressSchema), CreateUserSchema = UserSchema2.omit({
  id: !0,
  createdAt: !0,
  updatedAt: !0,
  isActive: !0
}).merge(UserAddressSchema), UpdateUserSchema = UserSchema2.pick({
  name: !0,
  email: !0,
  role: !0,
  isActive: !0
}).merge(
  import_zod11.z.object({
    password: import_zod11.z.string().optional()
  })
).merge(UserAddressSchema), ResetPasswordSchema = UserSchema2.pick({
  email: !0,
  password: !0
}).merge(
  import_zod11.z.object({
    token: import_zod11.z.string()
  })
), userApi = (0, import_core10.makeApi)([
  {
    method: "get",
    path: "/User/GetAll",
    alias: "getAllUsers",
    description: "Get all users",
    response: import_zod11.z.object({
      data: import_zod11.z.array(GetUserSchema),
      message: import_zod11.z.string(),
      success: import_zod11.z.boolean()
    }),
    errors
  },
  {
    method: "get",
    path: "/User/:id",
    alias: "getUserById",
    description: "Get a user",
    response: import_zod11.z.object({
      data: GetUserSchema,
      message: import_zod11.z.string(),
      success: import_zod11.z.boolean()
    }),
    errors
  },
  {
    method: "post",
    path: "/User",
    alias: "createUser",
    description: "Create a user",
    response: import_zod11.z.object({
      data: UuidSchema.nullable(),
      message: import_zod11.z.string(),
      success: import_zod11.z.boolean()
    }),
    parameters: [
      {
        name: "user",
        type: "Body",
        schema: CreateUserSchema
      }
    ],
    errors
  },
  {
    method: "put",
    path: "/User/:id",
    alias: "updateUser",
    description: "Update a user",
    response: import_zod11.z.object({
      data: UuidSchema.nullable(),
      message: import_zod11.z.string(),
      success: import_zod11.z.boolean()
    }),
    parameters: [
      {
        name: "user",
        type: "Body",
        schema: UpdateUserSchema
      }
    ],
    errors
  },
  {
    method: "post",
    path: "/User/ResetPassword",
    alias: "resetPassword",
    description: "Reset a user's password",
    response: import_zod11.z.object({
      data: import_zod11.z.boolean(),
      message: import_zod11.z.string(),
      success: import_zod11.z.boolean()
    }),
    parameters: [
      {
        name: "reset-password",
        type: "Body",
        schema: ResetPasswordSchema
      }
    ],
    errors
  }
]);

// app/lib/zodios/api-client.server.ts
var BASE_URL = process.env.BACKEND_API_URL;
(0, import_tiny_invariant.default)(BASE_URL, "BACKEND_API_URL env var is required");
var apiClient = new import_core11.Zodios(BASE_URL, [
  ...userApi,
  ...authApi,
  ...sportApi,
  ...teamApi,
  ...stadiumApi,
  ...eventApi,
  ...reservationApi,
  ...generalEventApi,
  ...generalReservationApi
]);

// app/lib/user.server.ts
var BACKEND_API_URL = process.env.BACKEND_API_URL;
async function getAllUsers() {
  try {
    return await apiClient.getAllUsers();
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(userApi, "getAllUsers", error))
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
    if ((0, import_core12.isErrorFromAlias)(userApi, "getUserById", error))
      return console.log("error", error.response.data), null;
    throw error;
  }
}
async function verifyLogin({
  email,
  password,
  role
}) {
  try {
    return await apiClient.verifyLogin({
      email,
      password,
      role
    });
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(authApi, "verifyLogin", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createUser(userData) {
  try {
    return await apiClient.createUser(userData);
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(userApi, "createUser", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateUser(id, updatedUser) {
  try {
    return await apiClient.updateUser(updatedUser, {
      params: {
        id
      }
    });
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(userApi, "updateUser", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function sendResetPasswordEmail(email) {
  try {
    return await apiClient.sendResetPasswordEmail({
      email
    });
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(authApi, "sendResetPasswordEmail", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function resetPassword(data) {
  try {
    return await apiClient.resetPassword(data);
  } catch (error) {
    if ((0, import_core12.isErrorFromAlias)(userApi, "resetPassword", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/utils/constants.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => (UserRole2[UserRole2.USER = 1] = "USER", UserRole2[UserRole2.ORGANIZER = 2] = "ORGANIZER", UserRole2[UserRole2.ADMIN = 3] = "ADMIN", UserRole2))(UserRole || {});

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
async function isOrganizer(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === 2 /* ORGANIZER */;
}

// app/styles/font.css
var font_default = "/build/_assets/font-U5ONVML3.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UWT3CASU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), appendCache = (0, import_core13.createEmotionCache)({ key: "mantine", prepend: !1 }), links = () => [
  { rel: "stylesheet", href: font_default },
  { rel: "stylesheet", href: tailwind_default }
], loader = async ({ request }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_core13.MantineProvider,
    {
      withNormalizeCSS: !0,
      emotionCache: appendCache,
      theme: {
        primaryColor: "dark"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 62,
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
              position: "top-center"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 70,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 77,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 78,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  );
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_modals.ModalsProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 88,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/routes/api/cancel-general-reservation.ts
var cancel_general_reservation_exports = {};
__export(cancel_general_reservation_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node"), import_remix_utils = require("remix-utils"), import_zod12 = require("zod");

// app/lib/general-reservation.server.ts
var import_core14 = require("@zodios/core");
async function getGeneralReservationsByStudentId(studentId) {
  try {
    return await apiClient.getGeneralReservationsByStudentId({
      params: {
        studentId
      }
    });
  } catch (error) {
    if ((0, import_core14.isErrorFromAlias)(
      generalReservationApi,
      "getGeneralReservationsByStudentId",
      error
    ))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createGeneralReservation(newReservation) {
  try {
    return await apiClient.createGeneralReservation(newReservation);
  } catch (error) {
    if ((0, import_core14.isErrorFromAlias)(generalReservationApi, "createGeneralReservation", error))
      return console.log("error", error.response.data), error.response.data;
    throw new Error("Something went wrong");
  }
}
async function cancelGeneralReservation(reservationId) {
  try {
    return await apiClient.cancelGeneralReservation(void 0, {
      params: {
        reservationId
      }
    });
  } catch (error) {
    if ((0, import_core14.isErrorFromAlias)(generalReservationApi, "cancelGeneralReservation", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
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

// app/routes/api/cancel-general-reservation.ts
var CancelGeneralReservationSchema = import_zod12.z.object({
  reservationId: import_zod12.z.string().nonempty("Reservation ID is required")
}), action = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    CancelGeneralReservationSchema
  );
  if (fieldErrors)
    return (0, import_remix_utils.badRequest)({
      success: !1,
      message: "Invalid request",
      fieldErrors
    });
  let cancelReservationResponse = await cancelGeneralReservation(
    fields.reservationId
  );
  return cancelReservationResponse.success ? (0, import_node3.json)({ success: !0, message: "Reservation cancelled" }) : (0, import_remix_utils.badRequest)({
    success: !1,
    message: "Invalid request",
    fieldErrors: {
      reservationId: cancelReservationResponse.message
    }
  });
};

// app/routes/api/cancel-general-event.ts
var cancel_general_event_exports = {};
__export(cancel_general_event_exports, {
  action: () => action2
});
var import_node4 = require("@remix-run/node"), import_remix_utils2 = require("remix-utils"), import_zod13 = require("zod");

// app/lib/general-event.server.ts
var import_core15 = require("@zodios/core");
async function getGeneralEventsByOrganizerId(organizerId) {
  try {
    return await apiClient.getGeneralEventsByOrganizerId({
      params: {
        organizerId
      }
    });
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(generalEventApi, "getGeneralEventsByOrganizerId", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function getAllGeneralEvents() {
  try {
    return await apiClient.getAllGeneralEvents();
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(generalEventApi, "getAllGeneralEvents", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createGeneralEvent(newEvent) {
  try {
    return await apiClient.createGeneralEvent(newEvent);
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(generalEventApi, "createGeneralEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateGeneralEvent(id, newEvent) {
  try {
    return await apiClient.updateGeneralEvent(
      {
        name: newEvent.name,
        description: newEvent.description,
        endDateTime: newEvent.endDateTime,
        startDateTime: newEvent.startDateTime,
        capacity: newEvent.capacity,
        addressLine1: newEvent.addressLine1,
        addressLine2: newEvent.addressLine2,
        city: newEvent.city,
        state: newEvent.state,
        zipCode: newEvent.zipCode
      },
      {
        params: {
          id
        }
      }
    );
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(generalEventApi, "updateGeneralEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function cancelGeneralEvent(id) {
  try {
    return await apiClient.cancelGeneralEvent(void 0, {
      params: {
        id
      }
    });
  } catch (error) {
    if ((0, import_core15.isErrorFromAlias)(generalEventApi, "cancelGeneralEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/routes/api/cancel-general-event.ts
var CancelGeneralEventSchema = import_zod13.z.object({
  eventId: import_zod13.z.string().nonempty("Event ID is required")
}), action2 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    CancelGeneralEventSchema
  );
  if (fieldErrors)
    return (0, import_remix_utils2.badRequest)({
      success: !1,
      fieldErrors
    });
  let cancelEventResponse = await cancelGeneralEvent(fields.eventId);
  return cancelEventResponse.success ? (0, import_node4.json)({ success: !0 }) : (0, import_remix_utils2.badRequest)({
    success: !1,
    fieldErrors: {
      eventId: cancelEventResponse.message
    }
  });
};

// app/routes/api/cancel-reservation.ts
var cancel_reservation_exports = {};
__export(cancel_reservation_exports, {
  action: () => action3
});
var import_node5 = require("@remix-run/node"), import_remix_utils3 = require("remix-utils"), import_zod14 = require("zod");

// app/lib/reservation.server.ts
var import_core16 = require("@zodios/core");
async function getReservationsByStudentId(studentId) {
  try {
    return await apiClient.getReservationsByStudentId({
      params: {
        studentId
      }
    });
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(reservationApi, "getReservationsByStudentId", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createReservation(newReservation) {
  try {
    return await apiClient.createReservation(newReservation);
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(reservationApi, "createReservation", error))
      return console.log("error", error.response.data), error.response.data;
    throw new Error("Something went wrong");
  }
}
async function cancelReservation(reservationId) {
  try {
    return await apiClient.cancelReservation(void 0, {
      params: {
        reservationId
      }
    });
  } catch (error) {
    if ((0, import_core16.isErrorFromAlias)(reservationApi, "cancelReservation", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/routes/api/cancel-reservation.ts
var CancelReservationSchema = import_zod14.z.object({
  reservationId: import_zod14.z.string().nonempty("Reservation ID is required")
}), action3 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    CancelReservationSchema
  );
  if (fieldErrors)
    return (0, import_remix_utils3.badRequest)({
      success: !1,
      message: "Invalid request",
      fieldErrors
    });
  let cancelReservationResponse = await cancelReservation(
    fields.reservationId
  );
  return cancelReservationResponse.success ? (0, import_node5.json)({ success: !0, message: "Reservation cancelled" }) : (0, import_remix_utils3.badRequest)({
    success: !1,
    message: "Invalid request",
    fieldErrors: {
      reservationId: cancelReservationResponse.message
    }
  });
};

// app/routes/api/cancel-event.ts
var cancel_event_exports = {};
__export(cancel_event_exports, {
  action: () => action4
});
var import_node6 = require("@remix-run/node"), import_remix_utils4 = require("remix-utils"), import_zod15 = require("zod");

// app/lib/event.server.ts
var import_core17 = require("@zodios/core");
async function getEventsByOrganizerId(organizerId) {
  try {
    return await apiClient.getEventsByOrganizerId({
      params: {
        organizerId
      }
    });
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(eventApi, "getEventsByOrganizerId", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function getAllEvents() {
  try {
    return await apiClient.getAllEvents();
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(eventApi, "getAllEvents", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createEvent(newEvent) {
  try {
    return await apiClient.createEvent(newEvent);
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(eventApi, "createEvent", error))
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
    if ((0, import_core17.isErrorFromAlias)(eventApi, "updateEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function cancelEvent(id) {
  try {
    return await apiClient.cancelEvent(void 0, {
      params: {
        id
      }
    });
  } catch (error) {
    if ((0, import_core17.isErrorFromAlias)(eventApi, "cancelEvent", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/routes/api/cancel-event.ts
var CancelEventSchema = import_zod15.z.object({
  eventId: import_zod15.z.string().nonempty("Event ID is required")
}), action4 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, CancelEventSchema);
  if (fieldErrors)
    return (0, import_remix_utils4.badRequest)({ success: !1, fieldErrors });
  let cancelEventResponse = await cancelEvent(fields.eventId);
  return cancelEventResponse.success ? (0, import_node6.json)({ success: !0 }) : (0, import_remix_utils4.badRequest)({
    success: !1,
    fieldErrors: {
      eventId: cancelEventResponse.message
    }
  });
};

// app/routes/api/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader2
});
var import_node7 = require("@remix-run/node");
var action5 = async ({ request }) => logout(request), loader2 = async () => (0, import_node7.redirect)("/");

// app/routes/api/edit-user.ts
var edit_user_exports = {};
__export(edit_user_exports, {
  action: () => action6
});
var import_node8 = require("@remix-run/node"), import_remix_utils5 = require("remix-utils"), import_zod16 = require("zod");
var EditUserSchema = import_zod16.z.object({
  userId: import_zod16.z.string().nonempty("User ID is required"),
  role: import_zod16.z.string().min(1, "Role is required").transform(Number),
  name: import_zod16.z.string().min(1, "Name is required"),
  email: import_zod16.z.string().email("Invalid email"),
  password: import_zod16.z.string().optional(),
  addressLine1: import_zod16.z.string().min(1, "Address Line 1 is required"),
  addressLine2: import_zod16.z.string().optional(),
  city: import_zod16.z.string().min(1, "City is required"),
  state: import_zod16.z.string().min(1, "State is required"),
  zipCode: import_zod16.z.string().min(1, "Zip Code is required"),
  isActive: import_zod16.z.enum(["on"]).optional()
}).superRefine((data, ctx) => {
  data.password && data.password.length < 7 && ctx.addIssue({
    code: import_zod16.z.ZodIssueCode.custom,
    message: "Password must be at least 7 characters",
    path: ["password"]
  });
}), action6 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, EditUserSchema);
  if (fieldErrors)
    return (0, import_remix_utils5.badRequest)({ success: !1, fieldErrors });
  let updateUserResponse = await updateUser(fields.userId, {
    ...fields,
    isActive: fields.isActive === "on"
  });
  return updateUserResponse.success ? (0, import_node8.json)({ success: !0, message: "Update successfull!" }) : (0, import_remix_utils5.badRequest)({
    success: !1,
    fieldErrors: {
      userId: updateUserResponse.message
    }
  });
};

// app/routes/super-admin.tsx
var super_admin_exports = {};
__export(super_admin_exports, {
  default: () => AppLayout,
  loader: () => loader3
});
var import_solid = require("@heroicons/react/24/solid"), import_core19 = require("@mantine/core"), import_node9 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

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
var import_core18 = require("@mantine/core"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TailwindContainer({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_core18.clsx)("mx-auto max-w-2xl lg:max-w-7xl", className), children }, void 0, !1, {
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
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node9.redirect)("/student") : await isOrganizer(request) ? (0, import_node9.redirect)("/organizer") : await isAdmin(request) ? (0, import_node9.redirect)("/admin") : (0, import_node9.json)({}));
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderComponent, {}, void 0, !1, {
      fileName: "app/routes/super-admin.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.ScrollArea, { classNames: { root: "flex-1 bg-gray-100" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Content, {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-shrink-0 items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Anchor, { component: import_react4.Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Menu, { position: "bottom-start", withArrow: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Avatar, { color: "blue", size: "md", children: user.name.charAt(0) }, void 0, !1, {
          fileName: "app/routes/super-admin.tsx",
          lineNumber: 66,
          columnNumber: 12
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Avatar, {}, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Menu.Dropdown, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Menu.Item, { disabled: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col", children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core19.Divider, {}, void 0, !1, {
            fileName: "app/routes/super-admin.tsx",
            lineNumber: 82,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_core19.Menu.Item,
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
var import_node10 = require("@remix-run/node");

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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => (await requireUserId(request), (0, import_node10.json)({}));
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
  ROUTE: () => ROUTE,
  default: () => AppLayout2,
  loader: () => loader5
});
var import_node11 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_lucide_react3 = require("lucide-react");

// app/components/Nav.tsx
var import_core20 = require("@mantine/core"), import_react6 = require("@remix-run/react"), import_lucide_react2 = require("lucide-react"), React2 = __toESM(require("react")), import_react7 = require("react");

// app/components/LogoutButton.tsx
var import_react5 = require("@remix-run/react"), import_lucide_react = require("lucide-react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function LogoutButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Form, { method: "post", action: "/api/auth/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      type: "submit",
      className: "rounded-lg p-1.5 text-gray-300 transition-all duration-150 ease-in-out hover:bg-stone-700 active:bg-stone-800",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_lucide_react.LogOutIcon, { width: 18 }, void 0, !1, {
        fileName: "app/components/LogoutButton.tsx",
        lineNumber: 11,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/LogoutButton.tsx",
      lineNumber: 7,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/LogoutButton.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/utils/misc.ts
var import_clsx = __toESM(require("clsx")), import_tailwind_merge = require("tailwind-merge"), import_zod_fetch = require("zod-fetch");
function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  }).format(new Date(date));
}
function formatDateTime(date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}
function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}
var dbWithZod = (0, import_zod_fetch.createZodFetcher)(), userRoleLookup = (role) => {
  switch (role) {
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
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.default)(inputs));
}
function getInitials(name) {
  let nameParts = name.split(/[^a-zA-Z]+/), initials = "";
  for (let part of nameParts)
    if (part.length > 0 && (initials += part[0]), initials.length >= 2)
      break;
  return initials.toUpperCase();
}

// app/components/Nav.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Nav(props) {
  let { menuItems } = props, [showSidebar, setShowSidebar] = (0, import_react7.useState)(!1), user = useUser(), location = (0, import_react6.useLocation)();
  return (0, import_react7.useEffect)(() => {
    setShowSidebar(!1);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        className: cn("fixed z-20 sm:hidden", showSidebar && "right-7 top-7"),
        onClick: () => setShowSidebar(!showSidebar),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_lucide_react2.Menu, { width: 20 }, void 0, !1, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 42,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 38,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: cn(
          "fixed z-10 flex h-full w-full transform flex-col gap-4 py-3 pl-3 transition-all sm:w-64 sm:translate-x-0",
          showSidebar ? "translate-x-0" : "-translate-x-full"
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full flex-col rounded-xl bg-stone-900 p-4 ring-1 ring-stone-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_react6.Link,
            {
              to: "/",
              prefetch: "intent",
              className: "relative flex cursor-pointer items-center gap-4 py-1.5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_core20.Avatar,
                  {
                    src: null,
                    alt: "USEM",
                    size: "md",
                    classNames: {
                      placeholder: "text-xl text-stone-700",
                      root: "h-8 flex items-center justify-center"
                    },
                    children: "U"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Nav.tsx",
                    lineNumber: 57,
                    columnNumber: 7
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-cal text-xl tracking-wide text-gray-200", children: "USEM" }, void 0, !1, {
                  fileName: "app/components/Nav.tsx",
                  lineNumber: 69,
                  columnNumber: 7
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Nav.tsx",
              lineNumber: 52,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core20.ScrollArea, { classNames: { root: "flex-1 mt-8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-4", children: menuItems.map(({ title, items }, idx) => {
            let showDivider = idx !== menuItems.length - 1;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(React2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
                title && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xss font-semibold uppercase text-gray-300", children: title }, void 0, !1, {
                  fileName: "app/components/Nav.tsx",
                  lineNumber: 83,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-1", children: items.map(({ name, href, icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  import_react6.NavLink,
                  {
                    to: href,
                    end: !0,
                    prefetch: "intent",
                    className: ({ isActive }) => cn(
                      "flex items-center space-x-3 rounded-lg px-2 py-1.5 text-gray-300 transition-all duration-150 ease-in-out hover:bg-stone-700 active:bg-stone-800",
                      isActive && "bg-stone-700 text-gray-100"
                    ),
                    children: [
                      icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-sm font-medium", children: name }, void 0, !1, {
                        fileName: "app/components/Nav.tsx",
                        lineNumber: 103,
                        columnNumber: 15
                      }, this)
                    ]
                  },
                  name,
                  !0,
                  {
                    fileName: "app/components/Nav.tsx",
                    lineNumber: 90,
                    columnNumber: 14
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/Nav.tsx",
                  lineNumber: 88,
                  columnNumber: 12
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Nav.tsx",
                lineNumber: 81,
                columnNumber: 11
              }, this),
              showDivider && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core20.Divider, {}, void 0, !1, {
                fileName: "app/components/Nav.tsx",
                lineNumber: 109,
                columnNumber: 27
              }, this)
            ] }, idx, !0, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 80,
              columnNumber: 10
            }, this);
          }) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 75,
            columnNumber: 7
          }, this) }, void 0, !1, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 74,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-2 border-t border-stone-700" }, void 0, !1, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 117,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                import_react6.Link,
                {
                  to: "settings",
                  className: "flex w-full flex-1 items-center space-x-3 truncate rounded-lg px-2 py-1.5 text-white",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      import_core20.Avatar,
                      {
                        src: void 0,
                        alt: `${user.name}'s avatar`,
                        radius: "xl",
                        color: "dark",
                        size: 32,
                        children: getInitials(user.name)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Nav.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "truncate text-sm font-medium", children: user.name }, void 0, !1, {
                      fileName: "app/components/Nav.tsx",
                      lineNumber: 132,
                      columnNumber: 9
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Nav.tsx",
                  lineNumber: 119,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LogoutButton, {}, void 0, !1, {
                fileName: "app/components/Nav.tsx",
                lineNumber: 137,
                columnNumber: 8
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Nav.tsx",
              lineNumber: 118,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Nav.tsx",
            lineNumber: 116,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Nav.tsx",
          lineNumber: 51,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 45,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

// app/routes/organizer.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), ROUTE = "/organizer", loader5 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node11.redirect)("/student") : await isAdmin(request) ? (0, import_node11.redirect)("/admin") : (0, import_node11.json)({})), navMenu = [
  {
    title: "Manage",
    items: [
      {
        name: "Sport Events",
        href: `${ROUTE}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_lucide_react3.TrophyIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      },
      {
        name: "General Events",
        href: `${ROUTE}/general-events`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_lucide_react3.LayoutDashboardIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/organizer.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }
    ]
  }
];
function AppLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Nav, { menuItems: navMenu }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "min-h-screen bg-stone-50 sm:pl-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 49,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 45,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer.tsx",
    lineNumber: 44,
    columnNumber: 3
  }, this);
}

// app/routes/organizer/general-events.tsx
var general_events_exports = {};
__export(general_events_exports, {
  action: () => action7,
  default: () => ManageGeenralEvents,
  loader: () => loader6
});
var import_solid3 = require("@heroicons/react/24/solid"), import_core22 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_hooks3 = require("@mantine/hooks"), import_node13 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_lucide_react4 = require("lucide-react"), React3 = __toESM(require("react")), import_sonner2 = require("sonner"), import_zod17 = require("zod");

// app/components/ui/CustomDrawer.tsx
var import_core21 = require("@mantine/core"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CustomDrawer(props) {
  let {
    opened,
    onClose,
    title,
    children,
    closeOnEscape = !0,
    closeOnClickOutside = !0,
    withCloseButton = !0,
    overlayProps
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_core21.Drawer.Root,
    {
      opened,
      onClose,
      position: "right",
      className: "border-0",
      size: "sm",
      classNames: {
        inner: "p-3",
        title: "font-medium",
        content: "rounded-xl bg-white flex flex-col",
        header: "p-6 bg-white",
        body: "px-6 pb-6 pt-0 h-full"
      },
      closeOnClickOutside,
      closeOnEscape,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.Overlay, { blur: 1.5, ...overlayProps }, void 0, !1, {
          fileName: "app/components/ui/CustomDrawer.tsx",
          lineNumber: 48,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.Title, { children: title }, void 0, !1, {
              fileName: "app/components/ui/CustomDrawer.tsx",
              lineNumber: 51,
              columnNumber: 6
            }, this),
            withCloseButton && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.CloseButton, {}, void 0, !1, {
              fileName: "app/components/ui/CustomDrawer.tsx",
              lineNumber: 52,
              columnNumber: 26
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ui/CustomDrawer.tsx",
            lineNumber: 50,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core21.Drawer.Body, { children }, void 0, !1, {
            fileName: "app/components/ui/CustomDrawer.tsx",
            lineNumber: 55,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/CustomDrawer.tsx",
          lineNumber: 49,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/CustomDrawer.tsx",
      lineNumber: 32,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/PageHeading.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function PageHeading(props) {
  let { title, rightSection } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "font-cal text-3xl font-bold", children: title }, void 0, !1, {
      fileName: "app/components/ui/PageHeading.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    rightSection
  ] }, void 0, !0, {
    fileName: "app/components/ui/PageHeading.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/data/UsStates.ts
var USStates = [
  { id: "AL", name: "Alabama" },
  { id: "AK", name: "Alaska" },
  { id: "AZ", name: "Arizona" },
  { id: "AR", name: "Arkansas" },
  { id: "CA", name: "California" },
  { id: "CO", name: "Colorado" },
  { id: "CT", name: "Connecticut" },
  { id: "DE", name: "Delaware" },
  { id: "FL", name: "Florida" },
  { id: "GA", name: "Georgia" },
  { id: "HI", name: "Hawaii" },
  { id: "ID", name: "Idaho" },
  { id: "IL", name: "Illinois" },
  { id: "IN", name: "Indiana" },
  { id: "IA", name: "Iowa" },
  { id: "KS", name: "Kansas" },
  { id: "KY", name: "Kentucky" },
  { id: "LA", name: "Louisiana" },
  { id: "ME", name: "Maine" },
  { id: "MD", name: "Maryland" },
  { id: "MA", name: "Massachusetts" },
  { id: "MI", name: "Michigan" },
  { id: "MN", name: "Minnesota" },
  { id: "MS", name: "Mississippi" },
  { id: "MO", name: "Missouri" },
  { id: "MT", name: "Montana" },
  { id: "NE", name: "Nebraska" },
  { id: "NV", name: "Nevada" },
  { id: "NH", name: "New Hampshire" },
  { id: "NJ", name: "New Jersey" },
  { id: "NM", name: "New Mexico" },
  { id: "NY", name: "New York" },
  { id: "NC", name: "North Carolina" },
  { id: "ND", name: "North Dakota" },
  { id: "OH", name: "Ohio" },
  { id: "OK", name: "Oklahoma" },
  { id: "OR", name: "Oregon" },
  { id: "PA", name: "Pennsylvania" },
  { id: "RI", name: "Rhode Island" },
  { id: "SC", name: "South Carolina" },
  { id: "SD", name: "South Dakota" },
  { id: "TN", name: "Tennessee" },
  { id: "TX", name: "Texas" },
  { id: "UT", name: "Utah" },
  { id: "VT", name: "Vermont" },
  { id: "VA", name: "Virginia" },
  { id: "WA", name: "Washington" },
  { id: "WV", name: "West Virginia" },
  { id: "WI", name: "Wisconsin" },
  { id: "WY", name: "Wyoming" }
], UsStates_default = USStates;

// app/utils/hooks/use-sort.ts
var import_react9 = require("react"), useSort = (initialKey, initialDirection = "asc") => {
  let [sortParams, setSortParams] = (0, import_react9.useState)({
    key: initialKey,
    direction: initialDirection
  });
  return { sortParams, toggleSort: (key) => {
    setSortParams((prev) => ({
      key,
      direction: prev.direction === "asc" ? "desc" : "asc"
    }));
  } };
};

// app/utils/misc.server.ts
var import_node12 = require("@remix-run/node"), bcrypt = __toESM(require("bcryptjs"));
var DEFAULT_REDIRECT = "/", badRequest6 = (data) => (0, import_node12.json)(data, { status: 400 });
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}

// app/routes/organizer/general-events.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
var ManageGeneralEventSchema = import_zod17.z.object({
  eventId: import_zod17.z.string().optional(),
  name: import_zod17.z.string().min(1, "Name is required"),
  description: import_zod17.z.string().min(1, "Description is required"),
  startDateTime: import_zod17.z.string().min(1, "Start date is required"),
  endDateTime: import_zod17.z.string().min(1, "End date is required"),
  capacity: import_zod17.z.string().transform((val) => parseInt(val, 10)).pipe(import_zod17.z.number().min(1, "Capacity must be greater than 0")),
  addressLine1: import_zod17.z.string().min(1, { message: "Address line 1 is required" }),
  addressLine2: import_zod17.z.string().optional(),
  city: import_zod17.z.string().min(1, { message: "City is required" }),
  state: import_zod17.z.string().min(1, { message: "State is required" }),
  zipCode: import_zod17.z.string().min(1, { message: "Zip is required" })
}), loader6 = async ({ request }) => {
  let organizerId = await requireUserId(request), eventsResponse = await getGeneralEventsByOrganizerId(organizerId), events = eventsResponse.success ? eventsResponse.data ?? [] : [];
  return (0, import_node13.json)({
    events
  });
}, action7 = async ({ request }) => {
  let organizerId = await requireUserId(request), { fields, fieldErrors } = await validateAction(
    request,
    ManageGeneralEventSchema
  );
  if (fieldErrors)
    return badRequest6({
      success: !1,
      message: "There were errors with your submission",
      fieldErrors
    });
  let { eventId, ...rest } = fields;
  return eventId ? (await updateGeneralEvent(eventId, rest), (0, import_node13.json)({
    success: !0,
    message: "Event updated successfully"
  })) : (await createGeneralEvent({
    ...rest,
    organizerId
  }), (0, import_node13.json)({
    success: !0,
    message: "Event created successfully"
  }));
};
function ManageGeenralEvents() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  let fetcher = (0, import_react10.useFetcher)(), cancelEventfetcher = (0, import_react10.useFetcher)(), isCancelling = cancelEventfetcher.state !== "idle", { events } = (0, import_react10.useLoaderData)(), [selectedEvent, setSelectedEvent] = React3.useState(null), [selectedStartDateTime, setSelectedStartDateTime] = React3.useState(void 0), [selectedEndDateTime, setSelectedEndDateTime] = React3.useState(void 0), [mode, setMode] = React3.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks3.useDisclosure)(!1), [query, setQuery] = React3.useState(""), { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_core22.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_lucide_react4.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 160,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_lucide_react4.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 162,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 167,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/organizer/general-events.tsx",
      lineNumber: 152,
      columnNumber: 4
    },
    this
  ), filteredData = React3.useMemo(() => {
    let filteredData2 = events;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = events.filter(
        (e) => e.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [events, query, sortParams.direction, sortParams.key]), isSubmitting = fetcher.state !== "idle";
  return React3.useEffect(() => {
    isSubmitting || fetcher.data && fetcher.data.success && (handleModal.close(), import_sonner2.toast.success(fetcher.data.message), setSelectedEvent(null), setSelectedStartDateTime(void 0), setSelectedEndDateTime(void 0));
  }, [fetcher.data, isSubmitting]), React3.useEffect(() => {
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
  }, [selectedEndDateTime, selectedStartDateTime]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        PageHeading,
        {
          title: "General Events",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => {
                setMode(1 /* add */), handleModal.open();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_solid3.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/organizer/general-events.tsx",
                  lineNumber: 246,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "ml-2", children: "Add Event" }, void 0, !1, {
                  fileName: "app/routes/organizer/general-events.tsx",
                  lineNumber: 247,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 238,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 235,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_core22.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/organizer/general-events.tsx",
            lineNumber: 253,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core22.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_lucide_react4.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 261,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 260,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 252,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 276,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 272,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Schedule"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 279,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                SortableHeader,
                {
                  label: "Address",
                  sortKey: "addressLine1"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/organizer/general-events.tsx",
                  lineNumber: 290,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 286,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SortableHeader, { label: "Capacity", sortKey: "capacity" }, void 0, !1, {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 300,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 296,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SortableHeader, { label: "Status", sortKey: "isActive" }, void 0, !1, {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 307,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 303,
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
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 309,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 270,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((event) => {
          let isEventPast = new Date(event.startDateTime) < /* @__PURE__ */ new Date(), fullAddress = `${event.addressLine1}${event.addressLine2 ? ", " + event.addressLine2 : ""}, ${event.city}, ${event.state}, ${event.zipCode}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.name }, void 0, !1, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 324,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
                formatDateTime(event.startDateTime),
                " -"
              ] }, void 0, !0, {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 328,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: formatDateTime(event.endDateTime) }, void 0, !1, {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 329,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 327,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: fullAddress }, void 0, !1, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 331,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.capacity }, void 0, !1, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 335,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_core22.Badge,
              {
                color: event.isActive ? "green" : "red",
                radius: "xs",
                children: event.isActive ? "Active" : "Cancelled"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 340,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 339,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center gap-4", children: [
              event.isActive && !isEventPast ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_core22.Button,
                {
                  loading: isSubmitting,
                  variant: "subtle",
                  compact: !0,
                  loaderPosition: "right",
                  disabled: isCancelling,
                  onClick: () => {
                    let eventToEdit = events.find(
                      (e) => e.id === event.id
                    );
                    setMode(0 /* edit */), eventToEdit && (setSelectedEvent(eventToEdit), setSelectedStartDateTime(
                      eventToEdit.startDateTime ? new Date(eventToEdit.startDateTime) : void 0
                    ), setSelectedEndDateTime(
                      eventToEdit.endDateTime ? new Date(eventToEdit.endDateTime) : void 0
                    ), handleModal.open());
                  },
                  children: "Edit"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/organizer/general-events.tsx",
                  lineNumber: 351,
                  columnNumber: 17
                },
                this
              ) : null,
              event.isActive && !isEventPast ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_core22.Button,
                {
                  type: "button",
                  loading: isCancelling,
                  variant: "subtle",
                  compact: !0,
                  color: "red",
                  loaderPosition: "right",
                  disabled: isSubmitting,
                  onClick: () => {
                    cancelEventfetcher.submit(
                      {
                        eventId: event.id
                      },
                      {
                        action: "/api/cancel-general-event",
                        method: "post",
                        replace: !0
                      }
                    );
                  },
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/organizer/general-events.tsx",
                  lineNumber: 388,
                  columnNumber: 17
                },
                this
              ) : null
            ] }, void 0, !0, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 348,
              columnNumber: 14
            }, this)
          ] }, event.id, !0, {
            fileName: "app/routes/organizer/general-events.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 315,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 268,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 267,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 266,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizer/general-events.tsx",
      lineNumber: 234,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer/general-events.tsx",
      lineNumber: 233,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => {
          setSelectedEvent(null), handleModal.close();
        },
        title: (0, import_core22.clsx)({
          "Edit Event": mode === 0 /* edit */,
          "Add Event": mode === 1 /* add */
        }),
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "eventId", value: selectedEvent == null ? void 0 : selectedEvent.id }, void 0, !1, {
            fileName: "app/routes/organizer/general-events.tsx",
            lineNumber: 439,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.TextInput,
            {
              name: "name",
              label: "Name",
              placeholder: "Enter event name",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.name,
              error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 441,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.Textarea,
            {
              name: "description",
              label: "Description",
              placeholder: "Enter event description",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.description,
              error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.description,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 450,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_dates.DateTimePicker,
            {
              valueFormat: "MMM DD 'YY - hh:mm A",
              name: "startDateTime",
              label: "Event Start",
              minDate: mode === 0 /* edit */ ? /* @__PURE__ */ new Date() : new Date(Date.now() + 864e5),
              placeholder: "Select a date & time",
              value: selectedStartDateTime,
              onChange: (val) => setSelectedStartDateTime(val),
              error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.startDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 459,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
              error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.endDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 475,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.NumberInput,
            {
              name: "capacity",
              label: "Capacity",
              placeholder: "Enter event capacity",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.capacity,
              error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.capacity,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 492,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.addressLine1,
              error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 501,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.addressLine2,
              error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 509,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_core22.TextInput,
              {
                name: "city",
                label: "City",
                defaultValue: selectedEvent == null ? void 0 : selectedEvent.city,
                error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 517,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_core22.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                defaultValue: selectedEvent == null ? void 0 : selectedEvent.state,
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                error: (_r = (_q = fetcher.data) == null ? void 0 : _q.fieldErrors) == null ? void 0 : _r.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 525,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/general-events.tsx",
            lineNumber: 516,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_core22.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              defaultValue: selectedEvent != null && selectedEvent.zipCode ? Number(selectedEvent == null ? void 0 : selectedEvent.zipCode) : void 0,
              error: (_t = (_s = fetcher.data) == null ? void 0 : _s.fieldErrors) == null ? void 0 : _t.zipCode,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/general-events.tsx",
              lineNumber: 543,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4 mt-2 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_core22.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => {
                  setSelectedEvent(null), setSelectedStartDateTime(void 0), setSelectedEndDateTime(void 0), handleModal.close();
                },
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 556,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_core22.Button,
              {
                type: "submit",
                loading: isSubmitting,
                disabled: !selectedStartDateTime || !selectedEndDateTime,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add event"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/general-events.tsx",
                lineNumber: 569,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/general-events.tsx",
            lineNumber: 555,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 438,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/general-events.tsx",
          lineNumber: 437,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/organizer/general-events.tsx",
        lineNumber: 425,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/organizer/general-events.tsx",
    lineNumber: 232,
    columnNumber: 3
  }, this);
}

// app/routes/organizer/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action8,
  default: () => ManageProfile,
  meta: () => meta2
});
var import_core23 = require("@mantine/core"), import_node14 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), React4 = __toESM(require("react")), import_remix_utils6 = require("remix-utils"), import_sonner3 = require("sonner"), import_zod18 = require("zod");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Manage Profile"
}), _UpdateUserSchema = UpdateUserSchema.extend({
  role: import_zod18.z.preprocess(Number, import_zod18.z.number().int().min(1).max(4))
}).omit({
  isActive: !0
});
async function action8({ request }) {
  let userId = await requireUserId(request), { fields, fieldErrors } = await validateAction(request, _UpdateUserSchema);
  if (console.log(fields, fieldErrors), fieldErrors)
    return (0, import_remix_utils6.badRequest)({
      fieldErrors,
      success: !1
    });
  let updateUserResponse = await updateUser(userId, {
    ...fields,
    isActive: !0
  });
  return console.log(updateUserResponse), updateUserResponse.success ? (0, import_node14.json)({
    success: !0
  }) : (0, import_remix_utils6.badRequest)({
    success: !1
  });
}
function ManageProfile() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let user = useUser(), fetcher = (0, import_react11.useFetcher)(), isSubmitting = fetcher.state !== "idle";
  return React4.useEffect(() => {
    isSubmitting || fetcher.data && (fetcher.data.success ? import_sonner3.toast.success("Profile updated") : import_sonner3.toast.error("Please try again"));
  }, [fetcher.data, isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col space-y-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PageHeading, { title: "Settings" }, void 0, !1, {
      fileName: "app/routes/organizer/settings.tsx",
      lineNumber: 86,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      fetcher.Form,
      {
        className: "flex flex-col gap-6 rounded-lg border border-stone-300 bg-stone-100 p-6",
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { hidden: !0, name: "role", defaultValue: user.role }, void 0, !1, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 92,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "font-cal text-xl", children: "Name" }, void 0, !1, {
              fileName: "app/routes/organizer/settings.tsx",
              lineNumber: 94,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                className: "max-w-md",
                name: "name",
                defaultValue: user.name,
                error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 96,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "font-cal text-xl", children: "Email" }, void 0, !1, {
              fileName: "app/routes/organizer/settings.tsx",
              lineNumber: 107,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                name: "email",
                type: "email",
                error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
                className: "max-w-md",
                description: "You cannot change your email address",
                defaultValue: user.email,
                readOnly: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 109,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 106,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "font-cal text-xl", children: "Password" }, void 0, !1, {
              fileName: "app/routes/organizer/settings.tsx",
              lineNumber: 121,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.PasswordInput,
              {
                className: "max-w-md",
                name: "password",
                error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
                placeholder: "Leave blank to keep the same password",
                minLength: 8
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 123,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 120,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative flex flex-col gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "font-cal text-xl", children: "Address" }, void 0, !1, {
              fileName: "app/routes/organizer/settings.tsx",
              lineNumber: 133,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                className: "max-w-md",
                name: "addressLine1",
                label: "Address Line 1",
                defaultValue: user.addressLine1,
                error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 135,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                className: "max-w-md",
                name: "addressLine2",
                label: "Address Line 2",
                defaultValue: user.addressLine2,
                error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine2,
                maxLength: 32
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 145,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                className: "max-w-md",
                name: "city",
                label: "City",
                defaultValue: user.city,
                error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.city,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 154,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                name: "state",
                label: "State",
                className: "max-w-md",
                defaultValue: user.state,
                placeholder: "Select a state",
                error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 164,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_core23.TextInput,
              {
                className: "max-w-md",
                name: "zipCode",
                label: "Zip Code",
                defaultValue: user.zipCode,
                error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.zipCode,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/settings.tsx",
                lineNumber: 178,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 132,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-end border-t border-t-stone-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_core23.Button,
            {
              type: "submit",
              loading: isSubmitting,
              color: "dark",
              className: "mt-4",
              children: "Update"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/settings.tsx",
              lineNumber: 190,
              columnNumber: 8
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/organizer/settings.tsx",
            lineNumber: 189,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/organizer/settings.tsx",
        lineNumber: 88,
        columnNumber: 6
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/organizer/settings.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer/settings.tsx",
    lineNumber: 84,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/organizer/settings.tsx",
    lineNumber: 83,
    columnNumber: 3
  }, this);
}

// app/routes/organizer/index.tsx
var organizer_exports2 = {};
__export(organizer_exports2, {
  action: () => action9,
  default: () => ManageEvents,
  loader: () => loader7
});
var import_solid4 = require("@heroicons/react/24/solid"), import_core27 = require("@mantine/core"), import_dates2 = require("@mantine/dates"), import_hooks5 = require("@mantine/hooks"), import_node15 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_lucide_react5 = require("lucide-react"), React5 = __toESM(require("react")), import_sonner4 = require("sonner"), import_zod19 = require("zod");

// app/lib/sport.server.ts
var import_core24 = require("@zodios/core");
async function getAllSports() {
  try {
    return await apiClient.getAllSports();
  } catch (error) {
    if ((0, import_core24.isErrorFromAlias)(sportApi, "getAllSports", error))
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
    if ((0, import_core24.isErrorFromAlias)(sportApi, "createSport", error))
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
    if ((0, import_core24.isErrorFromAlias)(sportApi, "updateSport", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/lib/stadium.server.ts
var import_core25 = require("@zodios/core");
async function getAllStadiums() {
  try {
    return await apiClient.getAllStadiums();
  } catch (error) {
    if ((0, import_core25.isErrorFromAlias)(stadiumApi, "getAllStadiums", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createStadium(newStadium) {
  try {
    return await apiClient.createStadium(newStadium);
  } catch (error) {
    if ((0, import_core25.isErrorFromAlias)(stadiumApi, "createStadium", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateStadium(id, updatedData) {
  try {
    return await apiClient.updateStadium(updatedData, {
      params: {
        id
      }
    });
  } catch (error) {
    if ((0, import_core25.isErrorFromAlias)(stadiumApi, "updateStadium", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/lib/team.server.ts
var import_core26 = require("@zodios/core");
async function getAllTeams() {
  try {
    return await apiClient.getAllTeams();
  } catch (error) {
    if ((0, import_core26.isErrorFromAlias)(teamApi, "getAllTeams", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function createTeam(newTeam) {
  try {
    return await apiClient.createTeam({
      name: newTeam.name,
      sportId: newTeam.sportId
    });
  } catch (error) {
    if ((0, import_core26.isErrorFromAlias)(teamApi, "createTeam", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}
async function updateTeam(id, newTeam) {
  try {
    return await apiClient.updateTeam(
      {
        name: newTeam.name,
        sportId: newTeam.sportId
      },
      {
        params: {
          id
        }
      }
    );
  } catch (error) {
    if ((0, import_core26.isErrorFromAlias)(teamApi, "updateTeam", error))
      return console.log("error", error.response.data), error.response.data;
    throw error;
  }
}

// app/routes/organizer/index.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
var ManageEventSchema = import_zod19.z.object({
  eventId: import_zod19.z.string().optional(),
  name: import_zod19.z.string().min(1, "Name is required"),
  description: import_zod19.z.string().min(1, "Description is required"),
  sportId: import_zod19.z.string().min(1, "Sport is required"),
  teamOneId: import_zod19.z.string().min(1, "Team is required"),
  teamTwoId: import_zod19.z.string().min(1, "Team is required"),
  startDateTime: import_zod19.z.string().min(1, "Start date is required"),
  endDateTime: import_zod19.z.string().min(1, "End date is required"),
  stadiumId: import_zod19.z.string().min(1, "Stadium is required")
}), loader7 = async ({ request }) => {
  let organizerId = await requireUserId(request), [eventsResponse, stadiumsResponse, teamsResponse, sportsResponse] = await Promise.all([
    getEventsByOrganizerId(organizerId),
    getAllStadiums(),
    getAllTeams(),
    getAllSports()
  ]), events = eventsResponse.success ? eventsResponse.data ?? [] : [], stadiums = stadiumsResponse.success ? stadiumsResponse.data ?? [] : [], teams = teamsResponse.success ? teamsResponse.data ?? [] : [], sports = sportsResponse.success ? sportsResponse.data ?? [] : [];
  return (0, import_node15.json)({
    events,
    stadiums,
    teams,
    sports
  });
}, action9 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, ManageEventSchema);
  if (fieldErrors)
    return badRequest6({
      success: !1,
      fieldErrors,
      message: "Invalid fields"
    });
  console.log(fields);
  let { eventId, ...rest } = fields;
  return eventId ? (await updateEvent(eventId, rest), (0, import_node15.json)({
    success: !0,
    message: "Event updated successfully"
  })) : (await createEvent({
    ...rest,
    organizerId: await requireUserId(request)
  }), (0, import_node15.json)({
    success: !0,
    message: "Event created successfully"
  }));
};
function ManageEvents() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let fetcher = (0, import_react12.useFetcher)(), cancelEventfetcher = (0, import_react12.useFetcher)(), isCancelling = cancelEventfetcher.state !== "idle", { events, sports, stadiums, teams } = (0, import_react12.useLoaderData)(), [selectedEvent, setSelectedEvent] = React5.useState(null), [selectedSportId, setSelectedSportId] = React5.useState(null), [selectedTeamOneId, setSelectedTeamOneId] = React5.useState(null), [selectedTeamTwoId, setSelectedTeamTwoId] = React5.useState(null), [selectedStartDateTime, setSelectedStartDateTime] = React5.useState(void 0), [selectedEndDateTime, setSelectedEndDateTime] = React5.useState(void 0), [mode, setMode] = React5.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks5.useDisclosure)(!1), [query, setQuery] = React5.useState(""), { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_core27.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lucide_react5.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 179,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lucide_react5.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 181,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 186,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 171,
      columnNumber: 4
    },
    this
  ), filteredData = React5.useMemo(() => {
    let filteredData2 = events;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = events.filter(
        (e) => e.name.toLowerCase().includes(lowerCaseQuery) || e.teamOne.name.toLowerCase().includes(lowerCaseQuery) || e.teamTwo.name.toLowerCase().includes(lowerCaseQuery) || e.stadium.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [events, query, sortParams.direction, sortParams.key]), isSubmitting = fetcher.state !== "idle";
  return React5.useEffect(() => {
    isSubmitting || fetcher.data && fetcher.data.success && (setSelectedEvent(null), setSelectedSportId(null), setSelectedTeamOneId(null), setSelectedTeamTwoId(null), setSelectedStartDateTime(null), setSelectedEndDateTime(null), import_sonner4.toast.success(fetcher.data.message), handleModal.close());
  }, [fetcher.data, isSubmitting]), React5.useEffect(() => {
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
  }, [selectedEndDateTime, selectedStartDateTime]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TailwindContainer, { className: "rounded-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        PageHeading,
        {
          title: "Sport Events",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_core27.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => {
                setMode(1 /* add */), handleModal.open();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_solid4.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 270,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ml-2", children: "Add Event" }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 271,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 262,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 259,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_core27.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 277,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core27.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_lucide_react5.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 285,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 284,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 276,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 300,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 296,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: "Schedule"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 303,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableHeader, { label: "Team One", sortKey: "teamOne" }, void 0, !1, {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 314,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 310,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableHeader, { label: "Team Two", sortKey: "teamTwo" }, void 0, !1, {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 321,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 317,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableHeader, { label: "Stadium", sortKey: "stadium" }, void 0, !1, {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 328,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 324,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SortableHeader, { label: "Status", sortKey: "isActive" }, void 0, !1, {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 335,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 331,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 337,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 294,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: event.name }, void 0, !1, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 347,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "text-gray-500", children: event.sport.name }, void 0, !1, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 348,
              columnNumber: 14
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 346,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
              formatDateTime(event.startDateTime),
              " -"
            ] }, void 0, !0, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 353,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: formatDateTime(event.endDateTime) }, void 0, !1, {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 354,
              columnNumber: 14
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 352,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.teamOne.name }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.teamTwo.name }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 359,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: event.stadium.name }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 362,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_core27.Badge,
            {
              color: event.isActive ? "green" : "red",
              radius: "xs",
              children: event.isActive ? "Active" : "Cancelled"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 367,
              columnNumber: 14
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 366,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Button,
              {
                loading: isSubmitting,
                variant: "subtle",
                compact: !0,
                loaderPosition: "right",
                disabled: new Date(event.startDateTime) < /* @__PURE__ */ new Date() || isCancelling,
                onClick: () => {
                  setMode(0 /* edit */), events.find(
                    (e) => e.id === event.id
                  ) && (setSelectedEvent(event), setSelectedSportId(event.sport.id), setSelectedTeamOneId(event.teamOne.id), setSelectedTeamTwoId(event.teamTwo.id), setSelectedStartDateTime(
                    event.startDateTime ? new Date(event.startDateTime) : void 0
                  ), setSelectedEndDateTime(
                    event.endDateTime ? new Date(event.endDateTime) : void 0
                  ), handleModal.open());
                },
                children: "Edit"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 377,
                columnNumber: 15
              },
              this
            ),
            event.isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Button,
              {
                type: "button",
                loading: isCancelling,
                variant: "subtle",
                compact: !0,
                color: "red",
                loaderPosition: "right",
                disabled: new Date(event.startDateTime) < /* @__PURE__ */ new Date() || isSubmitting,
                onClick: () => {
                  cancelEventfetcher.submit(
                    {
                      eventId: event.id
                    },
                    {
                      action: "/api/cancel-event",
                      method: "post",
                      replace: !0
                    }
                  );
                },
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 416,
                columnNumber: 16
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 376,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 375,
            columnNumber: 13
          }, this)
        ] }, event.id, !0, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 345,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 343,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 293,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 292,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 291,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 290,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 258,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/organizer/index.tsx",
      lineNumber: 257,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: (0, import_core27.clsx)({
          "Edit Event": mode === 0 /* edit */,
          "Add Event": mode === 1 /* add */
        }),
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "eventId", value: selectedEvent == null ? void 0 : selectedEvent.id }, void 0, !1, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 466,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_core27.TextInput,
            {
              name: "name",
              label: "Name",
              placeholder: "Enter event name",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.name,
              error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 468,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_core27.Textarea,
            {
              name: "description",
              label: "Description",
              placeholder: "Enter event description",
              defaultValue: selectedEvent == null ? void 0 : selectedEvent.description,
              error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.description,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 477,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  import_core27.Select,
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
                    error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.sportId,
                    readOnly: Boolean(selectedTeamOneId) || Boolean(selectedTeamTwoId) || mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/index.tsx",
                    lineNumber: 493,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 492,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 487,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  import_core27.Select,
                  {
                    name: "stadiumId",
                    label: "Stadium",
                    placeholder: "Select a stadium",
                    defaultValue: selectedEvent == null ? void 0 : selectedEvent.stadium.id,
                    data: stadiums.map((stadium) => ({
                      label: stadium.name,
                      value: stadium.id
                    })),
                    error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.stadiumId,
                    readOnly: mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/index.tsx",
                    lineNumber: 520,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 519,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 514,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 486,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  import_core27.Select,
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
                    error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.teamOneId,
                    nothingFound: "No teams found",
                    readOnly: selectedSportId === null || mode === 0 /* edit */,
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/index.tsx",
                    lineNumber: 544,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 543,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 538,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Tooltip.Floating,
              {
                label: "Cannot edit once event is created",
                color: "blue",
                disabled: mode === 1 /* add */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  import_core27.Select,
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
                    error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.teamTwoId,
                    readOnly: selectedTeamOneId === null || mode === 0 /* edit */,
                    nothingFound: "No teams found",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/organizer/index.tsx",
                    lineNumber: 571,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/organizer/index.tsx",
                  lineNumber: 570,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 565,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 537,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_dates2.DateTimePicker,
            {
              valueFormat: "MMM DD 'YY - hh:mm A",
              name: "startDateTime",
              label: "Event Start",
              minDate: mode === 0 /* edit */ ? /* @__PURE__ */ new Date() : new Date(Date.now() + 864e5),
              placeholder: "Select a date & time",
              value: selectedStartDateTime,
              onChange: (val) => setSelectedStartDateTime(val),
              error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.startDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 597,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_dates2.DateTimePicker,
            {
              valueFormat: "MMM DD 'YY - hh:mm A",
              name: "endDateTime",
              label: "End Date & Time",
              placeholder: "Select a date & time",
              minDate: mode === 0 /* edit */ ? /* @__PURE__ */ new Date() : selectedStartDateTime ?? new Date(Date.now() + 864e5),
              value: selectedEndDateTime,
              onChange: (val) => setSelectedEndDateTime(val),
              disabled: selectedStartDateTime === null,
              error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.endDateTime,
              withAsterisk: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/organizer/index.tsx",
              lineNumber: 613,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Button,
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
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 631,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_core27.Button,
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
                fileName: "app/routes/organizer/index.tsx",
                lineNumber: 642,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/organizer/index.tsx",
            lineNumber: 630,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 465,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/organizer/index.tsx",
          lineNumber: 464,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/organizer/index.tsx",
        lineNumber: 455,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/organizer/index.tsx",
    lineNumber: 256,
    columnNumber: 3
  }, this);
}

// app/routes/__student.tsx
var student_exports = {};
__export(student_exports, {
  default: () => AppLayout3,
  loader: () => loader8
});
var import_node16 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_lucide_react6 = require("lucide-react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => (await requireUserId(request), await isAdmin(request) ? (0, import_node16.redirect)("/admin") : await isOrganizer(request) ? (0, import_node16.redirect)("/organizer") : (0, import_node16.json)({})), navMenu2 = [
  {
    items: [
      {
        name: "Sport Events",
        href: "/",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_lucide_react6.TrophyIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      },
      {
        name: "General Events",
        href: "/general-events",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_lucide_react6.LayoutDashboardIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      },
      {
        name: "My Events",
        href: "/my-events",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_lucide_react6.TicketIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/__student.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }
    ]
  }
];
function AppLayout3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Nav, { menuItems: navMenu2 }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "min-h-screen bg-stone-50 sm:pl-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 50,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 46,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student.tsx",
    lineNumber: 45,
    columnNumber: 3
  }, this);
}

// app/routes/__student/general-events.tsx
var general_events_exports2 = {};
__export(general_events_exports2, {
  Card: () => Card,
  default: () => GeneralEvents,
  loader: () => loader9
});
var import_node17 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_lucide_react8 = require("lucide-react"), React6 = __toESM(require("react")), import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/components/ui/EmptyState.tsx
var import_lucide_react7 = require("lucide-react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function EmptyState2(props) {
  let { label, icon, className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "div",
    {
      className: cn(
        "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center justify-center", children: icon ?? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_lucide_react7.XIcon, { size: 70, className: "text-gray-600" }, void 0, !1, {
          fileName: "app/components/ui/EmptyState.tsx",
          lineNumber: 19,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/components/ui/EmptyState.tsx",
          lineNumber: 18,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mt-4 block text-sm font-semibold text-gray-500", children: label }, void 0, !1, {
          fileName: "app/components/ui/EmptyState.tsx",
          lineNumber: 21,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/EmptyState.tsx",
      lineNumber: 12,
      columnNumber: 3
    },
    this
  );
}

// app/routes/__student/general-events.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader9 = async () => {
  let eventsResponse = await getAllGeneralEvents();
  if (eventsResponse.success) {
    let events = eventsResponse.data;
    return (0, import_tiny_invariant3.default)(events, "Events should be defined"), (0, import_node17.json)({ events });
  }
  return (0, import_node17.json)({ events: [] });
};
function GeneralEvents() {
  let { events } = (0, import_react14.useLoaderData)(), upcomingGeneralEvents = React6.useMemo(
    () => events.filter((event) => new Date(event.startDateTime) > /* @__PURE__ */ new Date()),
    [events]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col gap-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PageHeading, { title: "Overview" }, void 0, !1, {
      fileName: "app/routes/__student/general-events.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    upcomingGeneralEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid grid-cols-3 gap-8", children: upcomingGeneralEvents.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Card, { event }, event.id, !1, {
      fileName: "app/routes/__student/general-events.tsx",
      lineNumber: 48,
      columnNumber: 10
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__student/general-events.tsx",
      lineNumber: 46,
      columnNumber: 8
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      EmptyState2,
      {
        label: "No upcoming sport events, check back later",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_lucide_react8.CalendarRangeIcon, { size: 70, className: "text-gray-600" }, void 0, !1, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 52,
        columnNumber: 8
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 42,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 40,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 39,
    columnNumber: 3
  }, this);
}
function Card({
  event
}) {
  let fullAddress = `${event.addressLine1}${event.addressLine2 ? ", " + event.addressLine2 : ""}, ${event.city}, ${event.state}, ${event.zipCode}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dl", { className: "flex flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex-auto pl-6 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dt", { className: "text-base font-semibold leading-6 text-gray-900", children: event.name }, void 0, !1, {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 77,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "Date" }, void 0, !1, {
            fileName: "app/routes/__student/general-events.tsx",
            lineNumber: 85,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_lucide_react8.CalendarDaysIcon,
            {
              className: "h-6 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/general-events.tsx",
              lineNumber: 86,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dd", { className: "flex items-center gap-4 text-sm leading-6 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: formatDate(event.startDateTime) }, void 0, !1, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 92,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 83,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "Time" }, void 0, !1, {
            fileName: "app/routes/__student/general-events.tsx",
            lineNumber: 97,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_lucide_react8.ClockIcon, { className: "h-6 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/__student/general-events.tsx",
            lineNumber: 98,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dd", { className: "text-sm leading-6 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: [
          formatTime(event.startDateTime),
          " -",
          " ",
          formatTime(event.endDateTime)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 101,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 95,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "Status" }, void 0, !1, {
            fileName: "app/routes/__student/general-events.tsx",
            lineNumber: 109,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_lucide_react8.BuildingIcon,
            {
              className: "h-6 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/general-events.tsx",
              lineNumber: 110,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("dd", { className: "text-sm leading-6 text-gray-500", children: fullAddress }, void 0, !1, {
          fileName: "app/routes/__student/general-events.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 107,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/general-events.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-6 border-t border-gray-900/5 px-6 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_react14.Link,
      {
        className: "text-sm font-semibold leading-6 text-gray-900",
        to: "/my-events?tab=general-events",
        children: [
          "Get Tickets ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
            fileName: "app/routes/__student/general-events.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__student/general-events.tsx",
        lineNumber: 119,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__student/general-events.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 75,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/general-events.tsx",
    lineNumber: 74,
    columnNumber: 3
  }, this);
}

// app/routes/__student/my-events.tsx
var my_events_exports = {};
__export(my_events_exports, {
  action: () => action10,
  default: () => Events,
  loader: () => loader10
});
var import_solid5 = require("@heroicons/react/24/solid"), import_core28 = require("@mantine/core"), import_hooks6 = require("@mantine/hooks"), import_node18 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_lucide_react9 = require("lucide-react"), React8 = __toESM(require("react")), import_sonner5 = require("sonner"), import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_zod20 = require("zod");

// app/components/ui/table.tsx
var React7 = __toESM(require("react"));
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), TableRowContext = React7.createContext(void 0);
function useTableRow() {
  let context = React7.useContext(TableRowContext);
  if (!context)
    throw new Error("Components must be rendered within a <Table> component");
  return context;
}
var Table = React7.forwardRef((props, ref) => {
  let { children, className, ...delegateProps } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "table",
    {
      ref,
      className: cn("min-w-full border-separate border-spacing-0", className),
      ...delegateProps,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 31,
      columnNumber: 3
    },
    this
  );
}), TableRow = React7.forwardRef(
  (props, ref) => {
    let {
      children,
      className,
      hasBorder: hasBorderProp,
      ...delegateProps
    } = props, [hasBorder] = React7.useState(hasBorderProp ?? !1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TableRowContext.Provider, { value: { hasBorder }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("tr", { ref, className, ...delegateProps, children }, void 0, !1, {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 65,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, this);
  }
), TableBody = React7.forwardRef(
  (props, ref) => {
    let { children, className, ...delegateProps } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("tbody", { ref, className: cn(className), ...delegateProps, children }, void 0, !1, {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 85,
      columnNumber: 4
    }, this);
  }
), TableThead = React7.forwardRef(
  (props, ref) => {
    let { children, className, ...delegateProps } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("thead", { ref, className: cn(className), ...delegateProps, children }, void 0, !1, {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 104,
      columnNumber: 4
    }, this);
  }
), TableTh = React7.forwardRef(
  (props, ref) => {
    let { children, pos = "middle", className, ...delegateProps } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "th",
      {
        ref,
        scope: "col",
        className: cn(
          "sticky top-0 z-10 border-b border-gray-300 bg-stone-50 bg-opacity-75 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
          pos === "first" && "pl-4 pr-3 sm:pl-6 lg:pl-8",
          pos === "middle" && "hidden px-3 lg:table-cell",
          pos === "last" && "pl-3 pr-4 sm:pr-6 lg:pr-8",
          className
        ),
        ...delegateProps,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/table.tsx",
        lineNumber: 130,
        columnNumber: 4
      },
      this
    );
  }
), TableData = React7.forwardRef(
  (props, ref) => {
    let {
      children,
      pos = "middle",
      hasBorder: hasBorderProp,
      className,
      ...delegateProps
    } = props, context = useTableRow(), hasBorder = hasBorderProp ?? context.hasBorder;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "td",
      {
        ref,
        className: cn(
          "whitespace-nowrap py-6 text-sm text-gray-500",
          pos === "first" && "pl-4 pr-3 font-medium text-gray-800 sm:pl-6 lg:pl-8",
          pos === "middle" && "hidden px-3 lg:table-cell",
          pos === "last" && "px-3 pl-3 pr-4 text-right font-medium sm:pr-8 lg:pr-8",
          hasBorder && "border-b border-gray-200",
          className
        ),
        ...delegateProps,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/table.tsx",
        lineNumber: 172,
        columnNumber: 4
      },
      this
    );
  }
);

// app/routes/__student/my-events.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), CreateReservationSchema2 = import_zod20.z.object({
  eventId: import_zod20.z.string().min(1, "Please select an event"),
  eventType: import_zod20.z.enum(["sport-events", "general-events"])
}), loader10 = async ({ request }) => {
  let studentId = await requireUserId(request), sportEventsResponse = await getAllEvents(), generalEventsResponse = await getAllGeneralEvents(), sportReservationsResponse = await getReservationsByStudentId(studentId), generalReservationsResponse = await getGeneralReservationsByStudentId(
    studentId
  );
  if (!sportEventsResponse.success || !generalEventsResponse.success || !sportReservationsResponse.success || !generalReservationsResponse.success)
    return (0, import_node18.json)({
      sportEvents: [],
      sportReservations: [],
      generalEvents: [],
      generalReservations: []
    });
  let sportEvents = sportEventsResponse.data, sportReservations = sportReservationsResponse.data, generalEvents = generalEventsResponse.data, generalReservations = generalReservationsResponse.data;
  return (0, import_tiny_invariant4.default)(
    sportEvents && sportReservations && generalEvents && generalReservations,
    "Events and reservations must be defined"
  ), (0, import_node18.json)({
    sportEvents: sportEvents.filter(
      (event) => new Date(event.startDateTime) > /* @__PURE__ */ new Date() && event.isActive
    ),
    sportReservations,
    generalEvents: generalEvents.filter(
      (event) => new Date(event.startDateTime) > /* @__PURE__ */ new Date() && event.isActive
    ),
    generalReservations
  });
}, action10 = async ({ request }) => {
  let studentId = await requireUserId(request), { fields, fieldErrors } = await validateAction(
    request,
    CreateReservationSchema2
  );
  if (fieldErrors)
    return badRequest6({
      success: !1,
      message: "Invalid fields",
      fieldErrors
    });
  if (fields.eventType === "sport-events") {
    let response = await createReservation({
      studentId,
      eventId: fields.eventId
    });
    return response.success ? (0, import_node18.json)({
      success: !0,
      message: response.message
    }) : badRequest6({
      success: !1,
      message: response.message,
      fieldErrors: {
        eventId: response.message
      }
    });
  }
  if (fields.eventType === "general-events") {
    let response = await createGeneralReservation({
      studentId,
      eventId: fields.eventId
    });
    return response.success ? (0, import_node18.json)({
      success: !0,
      message: response.message
    }) : badRequest6({
      success: !1,
      message: response.message,
      fieldErrors: {
        eventId: response.message
      }
    });
  }
  return badRequest6({
    success: !1,
    message: "Invalid event type",
    fieldErrors: {
      eventId: "Invalid event type"
    }
  });
}, TabsValue = {
  SPORT_EVENTS: "sport-events",
  GENERAL_EVENTS: "general-events"
};
function Events() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let [searchParams, setSearchParams] = (0, import_react15.useSearchParams)(), { sportReservations, sportEvents, generalEvents, generalReservations } = (0, import_react15.useLoaderData)(), fetcher = (0, import_react15.useFetcher)(), [query, setQuery] = React8.useState(""), [activeTab, setActiveTab] = React8.useState(
    searchParams.get("tab") ?? TabsValue.SPORT_EVENTS
  ), [isSportModalOpen, handleSportModal] = (0, import_hooks6.useDisclosure)(!1), [isGeneralModalOpen, handleGeneralModal] = (0, import_hooks6.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle", { sortParams, toggleSort } = useSort("event"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_core28.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 218,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 220,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 225,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 210,
      columnNumber: 4
    },
    this
  ), filteredGeneralReservations = React8.useMemo(() => {
    let filteredData = generalReservations;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData = filteredData.filter(
        (e) => e.event.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData;
  }, [generalReservations, query, sortParams.direction, sortParams.key]), filteredSportsReservations = React8.useMemo(() => {
    let filteredData = sportReservations;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData = filteredData.filter(
        (e) => e.event.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData;
  }, [sportReservations, query, sortParams.direction, sortParams.key]);
  return React8.useEffect(() => {
    let tab = searchParams.get("tab");
    if (!tab || !Object.values(TabsValue).includes(tab)) {
      let params = new URLSearchParams();
      params.set("tab", TabsValue.SPORT_EVENTS), setSearchParams(params), tab = TabsValue.SPORT_EVENTS;
    }
    setActiveTab(tab);
  }, [searchParams, setSearchParams, setActiveTab]), React8.useEffect(() => {
    fetcher.state === "idle" && fetcher.data && (fetcher.data.success ? (import_sonner5.toast.success(fetcher.data.message), handleSportModal.close(), handleGeneralModal.close()) : import_sonner5.toast.error(fetcher.data.message));
  }, [fetcher.data, fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col gap-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        PageHeading,
        {
          title: "My Events",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core28.Button,
            {
              color: "dark",
              radius: "md",
              disabled: !activeTab,
              onClick: () => {
                activeTab === TabsValue.GENERAL_EVENTS ? handleGeneralModal.open() : activeTab === TabsValue.SPORT_EVENTS && handleSportModal.open();
              },
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.Plus, { size: 18 }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 322,
                columnNumber: 19
              }, this),
              children: "Reserve Tickets"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 311,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 308,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-8 flex max-w-md items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_core28.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 330,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 338,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 337,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 329,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core28.Tabs,
        {
          variant: "outline",
          value: activeTab,
          onTabChange: (tab) => {
            setActiveTab(tab);
            let params = new URLSearchParams();
            params.set("tab", tab ?? TabsValue.SPORT_EVENTS), setSearchParams(params);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Tabs.List, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Tabs.Tab, { value: TabsValue.SPORT_EVENTS, children: "Sports" }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 355,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Tabs.Tab, { value: TabsValue.GENERAL_EVENTS, children: "General" }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 356,
                columnNumber: 8
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 354,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Tabs.Panel, { value: TabsValue.SPORT_EVENTS, pt: "xs", children: filteredSportsReservations.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Table, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableThead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableRow, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { pos: "first", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SortableHeader, { label: "Event", sortKey: "event" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 367,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 366,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: "Schedule" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 369,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  SortableHeader,
                  {
                    label: "Seat Number",
                    sortKey: "seatNumber"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/__student/my-events.tsx",
                    lineNumber: 371,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 370,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: "Status" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 376,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { pos: "last", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: "Actions" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 378,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 377,
                  columnNumber: 14
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 365,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 364,
                columnNumber: 12
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableBody, { children: filteredSportsReservations.map((reservation, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                SportReservationRow,
                {
                  idx,
                  reservation
                },
                reservation.id,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 384,
                  columnNumber: 14
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 382,
                columnNumber: 12
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 363,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 362,
              columnNumber: 10
            }, this) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 361,
              columnNumber: 9
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              EmptyState2,
              {
                className: "mt-4",
                label: query ? "No results found. Please try again." : "No events.",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.ListXIcon, { size: 70, className: "text-gray-600" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 400,
                  columnNumber: 16
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 395,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 359,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Tabs.Panel, { value: TabsValue.GENERAL_EVENTS, pt: "xs", children: filteredGeneralReservations.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Table, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableThead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableRow, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { pos: "first", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SortableHeader, { label: "Event", sortKey: "event" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 413,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 412,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: "Schedule" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 415,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  SortableHeader,
                  {
                    label: "Seat Number",
                    sortKey: "seatNumber"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/__student/my-events.tsx",
                    lineNumber: 417,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 416,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { children: "Status" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 422,
                  columnNumber: 14
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableTh, { pos: "last", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: "Actions" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 424,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 423,
                  columnNumber: 14
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 411,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 410,
                columnNumber: 12
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableBody, { children: filteredGeneralReservations.map((reservation, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                GeneralReservationRow,
                {
                  idx,
                  reservation
                },
                reservation.id,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 430,
                  columnNumber: 14
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 428,
                columnNumber: 12
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 409,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 408,
              columnNumber: 10
            }, this) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 407,
              columnNumber: 9
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              EmptyState2,
              {
                className: "mt-4",
                label: query ? "No results found. Please try again." : "No events.",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react9.ListXIcon, { size: 70, className: "text-gray-600" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 446,
                  columnNumber: 16
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 441,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 405,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 343,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 307,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 306,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      CustomDrawer,
      {
        opened: isSportModalOpen,
        onClose: () => handleSportModal.close(),
        title: "Buy tickets",
        overlayProps: {
          opacity: 0.6,
          blur: 1.2
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { hidden: !0, name: "eventType", defaultValue: activeTab ?? "" }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 464,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
            ((_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.eventId) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Alert,
              {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_solid5.InformationCircleIcon, { className: "h-6 w-6" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 468,
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
                lineNumber: 467,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Select,
              {
                name: "eventId",
                label: "Event",
                withinPortal: !0,
                placeholder: "Select an event",
                nothingFound: "No events found",
                itemComponent: SelectSportItem,
                data: sportEvents.map((event) => {
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
                lineNumber: 476,
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
                  onClick: () => handleSportModal.close(),
                  color: "red",
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 500,
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
                  children: "Reserve your seat"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 508,
                  columnNumber: 8
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 499,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 465,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 463,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 454,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      CustomDrawer,
      {
        opened: isGeneralModalOpen,
        onClose: () => handleGeneralModal.close(),
        title: "Buy tickets",
        overlayProps: {
          opacity: 0.6,
          blur: 1.2
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { hidden: !0, name: "eventType", defaultValue: activeTab ?? "" }, void 0, !1, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 530,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
            ((_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.eventId) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Alert,
              {
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_solid5.InformationCircleIcon, { className: "h-6 w-6" }, void 0, !1, {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 534,
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
                lineNumber: 533,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core28.Select,
              {
                name: "eventId",
                label: "Event",
                withinPortal: !0,
                placeholder: "Select an event",
                nothingFound: "No events found",
                itemComponent: SelectGeneralItem,
                data: generalEvents.map((event) => {
                  let availableSeats = event.capacity - event.reservedSeats;
                  return {
                    start: event.startDateTime,
                    end: event.endDateTime,
                    label: `${event.name} (${availableSeats} seats available)`,
                    value: event.id,
                    disabled: availableSeats === 0
                  };
                }),
                error: Boolean((_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.eventId),
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/my-events.tsx",
                lineNumber: 542,
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
                  onClick: () => handleSportModal.close(),
                  color: "red",
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 565,
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
                  children: "Reserve your seat"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__student/my-events.tsx",
                  lineNumber: 573,
                  columnNumber: 8
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/__student/my-events.tsx",
              lineNumber: 564,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__student/my-events.tsx",
            lineNumber: 531,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/my-events.tsx",
          lineNumber: 529,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 520,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__student/my-events.tsx",
    lineNumber: 305,
    columnNumber: 3
  }, this);
}
function SportReservationRow({
  reservation,
  idx
}) {
  let { sportReservations: reservations } = (0, import_react15.useLoaderData)(), isLastIndex = reservations.length - 1 === idx, cancelFetcher = (0, import_react15.useFetcher)(), isCancelling = cancelFetcher.state !== "idle";
  return React8.useEffect(() => {
    cancelFetcher.state === "idle" && cancelFetcher.data && (cancelFetcher.data.success ? import_sonner5.toast.success(cancelFetcher.data.message) : import_sonner5.toast.error(cancelFetcher.data.message));
  }, [cancelFetcher.data, cancelFetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableRow, { hasBorder: !isLastIndex, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { pos: "first", children: reservation.event.name }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 617,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: formatDateTime(reservation.event.startDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 620,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: formatDateTime(reservation.event.endDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 621,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 619,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: reservation.seatNumber }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 624,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Badge, { color: reservation.isCancelled ? "red" : "green", children: reservation.isCancelled ? "Cancelled" : "Active" }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 627,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 626,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { pos: "last", children: reservation.isCancelled ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core28.Button,
      {
        type: "button",
        loading: isCancelling,
        variant: "subtle",
        color: "red",
        compact: !0,
        loaderPosition: "right",
        disabled: new Date(reservation.event.startDateTime) < /* @__PURE__ */ new Date(),
        onClick: () => {
          cancelFetcher.submit(
            {
              reservationId: reservation.id
            },
            {
              action: "/api/cancel-reservation",
              method: "post",
              replace: !0
            }
          );
        },
        children: "Cancel"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 634,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 632,
      columnNumber: 4
    }, this)
  ] }, reservation.id, !0, {
    fileName: "app/routes/__student/my-events.tsx",
    lineNumber: 616,
    columnNumber: 3
  }, this);
}
function GeneralReservationRow({
  reservation,
  idx
}) {
  let { sportReservations: reservations } = (0, import_react15.useLoaderData)(), isLastIndex = reservations.length - 1 === idx, cancelFetcher = (0, import_react15.useFetcher)(), isCancelling = cancelFetcher.state !== "idle";
  return React8.useEffect(() => {
    cancelFetcher.state === "idle" && cancelFetcher.data && (cancelFetcher.data.success ? import_sonner5.toast.success(cancelFetcher.data.message) : import_sonner5.toast.error(cancelFetcher.data.message));
  }, [cancelFetcher.data, cancelFetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableRow, { hasBorder: !isLastIndex, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { pos: "first", children: reservation.event.name }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 692,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        formatDateTime(reservation.event.startDateTime),
        " - "
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 695,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: formatDateTime(reservation.event.endDateTime) }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 696,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 694,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: reservation.seatNumber }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 699,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Badge, { color: reservation.isCancelled ? "red" : "green", children: reservation.isCancelled ? "Cancelled" : "Active" }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 702,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 701,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableData, { pos: "last", children: reservation.isCancelled ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core28.Button,
      {
        type: "button",
        loading: isCancelling,
        variant: "subtle",
        color: "red",
        compact: !0,
        loaderPosition: "right",
        disabled: new Date(reservation.event.startDateTime) < /* @__PURE__ */ new Date(),
        onClick: () => {
          cancelFetcher.submit(
            {
              reservationId: reservation.id
            },
            {
              action: "/api/cancel-general-reservation",
              method: "post",
              replace: !0
            }
          );
        },
        children: "Cancel"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 709,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 707,
      columnNumber: 4
    }, this)
  ] }, reservation.id, !0, {
    fileName: "app/routes/__student/my-events.tsx",
    lineNumber: 691,
    columnNumber: 3
  }, this);
}
var SelectSportItem = React8.forwardRef(
  (props, ref) => {
    let { start, end, address, label, ...others } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { ref, ...others, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Group, { noWrap: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Text, { size: "sm", children: label }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 752,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Text, { size: "xs", opacity: 0.65, children: address }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 753,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Text, { size: "xs", opacity: 0.65, children: [
        formatDateTime(start),
        " - ",
        formatDateTime(end)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 756,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 751,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 750,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 749,
      columnNumber: 4
    }, this);
  }
), SelectGeneralItem = React8.forwardRef(
  (props, ref) => {
    let { start, end, label, ...others } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { ref, ...others, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Group, { noWrap: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Text, { size: "sm", children: label }, void 0, !1, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 779,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core28.Text, { size: "xs", opacity: 0.65, children: [
        formatDateTime(start),
        " - ",
        formatDateTime(end)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/my-events.tsx",
        lineNumber: 780,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 778,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 777,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__student/my-events.tsx",
      lineNumber: 776,
      columnNumber: 4
    }, this);
  }
);

// app/routes/__student/settings.tsx
var settings_exports2 = {};
__export(settings_exports2, {
  action: () => action11,
  default: () => ManageProfile2,
  meta: () => meta3
});
var import_core29 = require("@mantine/core"), import_node19 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), React9 = __toESM(require("react")), import_remix_utils7 = require("remix-utils"), import_sonner6 = require("sonner"), import_zod21 = require("zod");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "Manage Profile"
}), _UpdateUserSchema2 = UpdateUserSchema.extend({
  role: import_zod21.z.preprocess(Number, import_zod21.z.number().int().min(1).max(4))
}).omit({
  isActive: !0
});
async function action11({ request }) {
  let userId = await requireUserId(request), { fields, fieldErrors } = await validateAction(request, _UpdateUserSchema2);
  if (console.log(fields, fieldErrors), fieldErrors)
    return (0, import_remix_utils7.badRequest)({
      fieldErrors,
      success: !1
    });
  let updateUserResponse = await updateUser(userId, {
    ...fields,
    isActive: !0
  });
  return console.log(updateUserResponse), updateUserResponse.success ? (0, import_node19.json)({
    success: !0
  }) : (0, import_remix_utils7.badRequest)({
    success: !1
  });
}
function ManageProfile2() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let user = useUser(), fetcher = (0, import_react16.useFetcher)(), isSubmitting = fetcher.state !== "idle";
  return React9.useEffect(() => {
    isSubmitting || fetcher.data && (fetcher.data.success ? import_sonner6.toast.success("Profile updated") : import_sonner6.toast.error("Please try again"));
  }, [fetcher.data, isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col space-y-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(PageHeading, { title: "Settings" }, void 0, !1, {
      fileName: "app/routes/__student/settings.tsx",
      lineNumber: 86,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      fetcher.Form,
      {
        className: "flex flex-col gap-6 rounded-lg border border-stone-300 bg-stone-100 p-6",
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { hidden: !0, name: "role", defaultValue: user.role }, void 0, !1, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 92,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "font-cal text-xl", children: "Name" }, void 0, !1, {
              fileName: "app/routes/__student/settings.tsx",
              lineNumber: 94,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                className: "max-w-md",
                name: "name",
                defaultValue: user.name,
                error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 96,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "font-cal text-xl", children: "Email" }, void 0, !1, {
              fileName: "app/routes/__student/settings.tsx",
              lineNumber: 107,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                name: "email",
                type: "email",
                error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
                className: "max-w-md",
                description: "You cannot change your email address",
                defaultValue: user.email,
                readOnly: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 109,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 106,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "font-cal text-xl", children: "Password" }, void 0, !1, {
              fileName: "app/routes/__student/settings.tsx",
              lineNumber: 121,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.PasswordInput,
              {
                className: "max-w-md",
                name: "password",
                error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
                placeholder: "Leave blank to keep the same password",
                minLength: 8
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 123,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 120,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative flex flex-col gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "font-cal text-xl", children: "Address" }, void 0, !1, {
              fileName: "app/routes/__student/settings.tsx",
              lineNumber: 133,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                className: "max-w-md",
                name: "addressLine1",
                label: "Address Line 1",
                defaultValue: user.addressLine1,
                error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 135,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                className: "max-w-md",
                name: "addressLine2",
                label: "Address Line 2",
                defaultValue: user.addressLine2,
                error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine2,
                maxLength: 32
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 145,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                className: "max-w-md",
                name: "city",
                label: "City",
                defaultValue: user.city,
                error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.city,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 154,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                name: "state",
                label: "State",
                className: "max-w-md",
                defaultValue: user.state,
                placeholder: "Select a state",
                error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 164,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_core29.TextInput,
              {
                className: "max-w-md",
                name: "zipCode",
                label: "Zip Code",
                defaultValue: user.zipCode,
                error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.zipCode,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__student/settings.tsx",
                lineNumber: 178,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 132,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center justify-end border-t border-t-stone-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core29.Button,
            {
              type: "submit",
              loading: isSubmitting,
              color: "dark",
              className: "mt-4",
              children: "Update"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/settings.tsx",
              lineNumber: 190,
              columnNumber: 8
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/__student/settings.tsx",
            lineNumber: 189,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__student/settings.tsx",
        lineNumber: 88,
        columnNumber: 6
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__student/settings.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/settings.tsx",
    lineNumber: 84,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/settings.tsx",
    lineNumber: 83,
    columnNumber: 3
  }, this);
}

// app/routes/__student/index.tsx
var student_exports2 = {};
__export(student_exports2, {
  Card: () => Card2,
  default: () => Events2,
  loader: () => loader11
});
var import_node20 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_lucide_react10 = require("lucide-react"), React10 = __toESM(require("react")), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader11 = async () => {
  let eventsResponse = await getAllEvents();
  if (eventsResponse.success) {
    let events = eventsResponse.data;
    return (0, import_tiny_invariant5.default)(events, "Events should be defined"), (0, import_node20.json)({ events });
  }
  return (0, import_node20.json)({ events: [] });
};
function Events2() {
  let { events } = (0, import_react17.useLoaderData)(), upcomingSportEvents = React10.useMemo(
    () => events.filter((event) => new Date(event.startDateTime) > /* @__PURE__ */ new Date()),
    [events]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col gap-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(PageHeading, { title: "Overview" }, void 0, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    upcomingSportEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-3 gap-8", children: upcomingSportEvents.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Card2, { event }, event.id, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 49,
      columnNumber: 10
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 47,
      columnNumber: 8
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      EmptyState2,
      {
        label: "No upcoming sport events, check back later",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_lucide_react10.CalendarRangeIcon, { size: 70, className: "text-gray-600" }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 53,
        columnNumber: 8
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 43,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 41,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this);
}
function Card2({
  event
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dl", { className: "flex flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-auto pl-6 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "text-base font-semibold leading-6 text-gray-900", children: event.name }, void 0, !1, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 74,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-8 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "sr-only", children: "Team" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 82,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_lucide_react10.AlignHorizontalDistributeEndIcon,
            {
              className: "h-6 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/index.tsx",
              lineNumber: 83,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-sm leading-6 text-gray-500", children: [
          event.teamOne.name,
          " vs ",
          event.teamTwo.name
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "sr-only", children: "Date" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 95,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_lucide_react10.CalendarDaysIcon,
            {
              className: "h-6 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/index.tsx",
              lineNumber: 96,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "flex items-center gap-4 text-sm leading-6 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: formatDate(event.startDateTime) }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 102,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 93,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "sr-only", children: "Time" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 107,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_lucide_react10.ClockIcon, { className: "h-6 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 108,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-sm leading-6 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: [
          formatTime(event.startDateTime),
          " -",
          " ",
          formatTime(event.endDateTime)
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 111,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 105,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-4 flex w-full flex-none gap-x-4 px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dt", { className: "flex-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "sr-only", children: "Status" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 119,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_lucide_react10.BuildingIcon,
            {
              className: "h-6 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__student/index.tsx",
              lineNumber: 120,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("dd", { className: "text-sm leading-6 text-gray-500", children: event.stadium.name }, void 0, !1, {
          fileName: "app/routes/__student/index.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 117,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 73,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-6 border-t border-gray-900/5 px-6 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_react17.Link,
      {
        className: "text-sm font-semibold leading-6 text-gray-900",
        to: "/my-events?tab=sport-events",
        children: [
          "Get Tickets ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
            fileName: "app/routes/__student/index.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__student/index.tsx",
        lineNumber: 131,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__student/index.tsx",
      lineNumber: 130,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 72,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__student/index.tsx",
    lineNumber: 71,
    columnNumber: 3
  }, this);
}

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader12
});
var import_core30 = require("@mantine/core"), import_node21 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => await getUser(request) ? (0, import_node21.redirect)("/") : null;
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("main", { className: "h-screen bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative hidden h-full flex-col p-10 text-gray-200 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "img",
        {
          src: "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
          alt: "IPM Ticket Master",
          className: "block w-full object-contain"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth.tsx",
          lineNumber: 21,
          columnNumber: 8
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative z-20 flex items-center gap-4 text-lg font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_core30.Avatar,
          {
            src: null,
            alt: "IPM Ticket Master",
            size: "md",
            classNames: {
              placeholder: "!text-xl !text-stone-700",
              root: "!h-8 !flex !items-center !justify-center"
            },
            children: "U"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth.tsx",
            lineNumber: 28,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "font-cal text-xl text-gray-200", children: "USEM" }, void 0, !1, {
          fileName: "app/routes/__auth.tsx",
          lineNumber: 40,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 44,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action12,
  default: () => ForgotPassword
});
var import_core31 = require("@mantine/core"), import_node22 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), React11 = __toESM(require("react")), import_sonner7 = require("sonner");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), action12 = async ({ request }) => {
  var _a, _b, _c, _d;
  let formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString(), email = (_b = formData.get("email")) == null ? void 0 : _b.toString();
  if (!email)
    return badRequest6({
      success: !1,
      intent: "send-reset-password-email",
      message: "Email is required",
      fieldErrors: {
        email: "Email is required"
      }
    });
  if (intent === "send-reset-password-email") {
    let sendEmailResponse = await sendResetPasswordEmail(email);
    return sendEmailResponse.success ? (0, import_node22.json)({
      success: !0,
      intent: "send-reset-password-email",
      message: "OTP sent to your email"
    }) : badRequest6({
      success: !1,
      intent: "send-reset-password-email",
      message: sendEmailResponse.message,
      fieldErrors: {
        email: sendEmailResponse.message
      }
    });
  } else if (intent === "reset-password") {
    let token = (_c = formData.get("token")) == null ? void 0 : _c.toString(), password = (_d = formData.get("password")) == null ? void 0 : _d.toString();
    if (!token)
      return badRequest6({
        success: !1,
        intent: "reset-password",
        message: "Token is required",
        fieldErrors: {
          token: "Token is required"
        }
      });
    if (!password)
      return badRequest6({
        success: !1,
        intent: "reset-password",
        message: "Password is required",
        fieldErrors: {
          password: "Password is required"
        }
      });
    let resetPasswordResponse = await resetPassword({
      email,
      token,
      password
    });
    return resetPasswordResponse.success ? (0, import_node22.redirect)("/login?message=reset-password-success") : badRequest6({
      success: !1,
      intent: "reset-password",
      message: resetPasswordResponse.message,
      fieldErrors: {
        password: resetPasswordResponse.message
      }
    });
  }
  return badRequest6({
    success: !1,
    message: "Invalid intent"
  });
};
function ForgotPassword() {
  var _a, _b, _c, _d, _e, _f;
  let fetcher = (0, import_react19.useFetcher)(), isSubmitting = fetcher.state !== "idle", [isEmailSent, setIsEmailSent] = React11.useState(!1);
  return React11.useEffect(() => {
    isSubmitting || fetcher.data && (fetcher.data.success ? (fetcher.data.intent === "send-reset-password-email" && setIsEmailSent(!0), import_sonner7.toast.success(fetcher.data.message)) : import_sonner7.toast.error(fetcher.data.message ?? "Something went wrong"));
  }, [isSubmitting, fetcher.data]), /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col space-y-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-2xl font-semibold tracking-tight", children: "Forgot password" }, void 0, !1, {
        fileName: "app/routes/__auth/forgot-password.tsx",
        lineNumber: 133,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-muted-foreground text-sm", children: "Enter your email below to reset your password" }, void 0, !1, {
        fileName: "app/routes/__auth/forgot-password.tsx",
        lineNumber: 136,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/forgot-password.tsx",
      lineNumber: 132,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      fetcher.Form,
      {
        method: "post",
        className: "w-full rounded bg-white px-6 pb-8 pt-6 text-black",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              import_core31.TextInput,
              {
                type: "email",
                name: "email",
                label: "Email",
                autoFocus: !isEmailSent,
                placeholder: "Enter your email",
                error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.email,
                withAsterisk: !1,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__auth/forgot-password.tsx",
                lineNumber: 146,
                columnNumber: 7
              },
              this
            ),
            isEmailSent ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_core31.NumberInput,
                {
                  name: "token",
                  label: "OTP",
                  autoFocus: !!isEmailSent,
                  placeholder: "Enter your OTP",
                  error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.token,
                  withAsterisk: !1,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__auth/forgot-password.tsx",
                  lineNumber: 159,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_core31.PasswordInput,
                {
                  name: "password",
                  label: "New password",
                  placeholder: "Enter your new password",
                  error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
                  withAsterisk: !1,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__auth/forgot-password.tsx",
                  lineNumber: 169,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/__auth/forgot-password.tsx",
              lineNumber: 158,
              columnNumber: 8
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/routes/__auth/forgot-password.tsx",
            lineNumber: 145,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "my-4 flex items-center justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_react19.Link,
            {
              to: "/login",
              prefetch: "intent",
              className: "font-roboto text-sm font-semibold text-blue-500 hover:underline",
              children: "Login instead?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/forgot-password.tsx",
              lineNumber: 182,
              columnNumber: 7
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/__auth/forgot-password.tsx",
            lineNumber: 181,
            columnNumber: 6
          }, this),
          isEmailSent ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_core31.Button,
            {
              fullWidth: !0,
              type: "submit",
              loading: isSubmitting,
              name: "intent",
              value: "reset-password",
              children: "Reset password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/forgot-password.tsx",
              lineNumber: 192,
              columnNumber: 7
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_core31.Button,
            {
              fullWidth: !0,
              type: "submit",
              loading: isSubmitting,
              name: "intent",
              value: "send-reset-password-email",
              children: "Get OTP"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/forgot-password.tsx",
              lineNumber: 202,
              columnNumber: 7
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__auth/forgot-password.tsx",
        lineNumber: 141,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/forgot-password.tsx",
    lineNumber: 131,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/forgot-password.tsx",
    lineNumber: 130,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action13,
  default: () => Register
});
var import_core32 = require("@mantine/core"), import_react20 = require("@remix-run/react");

// app/lib/zod.schema.ts
var import_zod22 = require("zod"), LoginSchema2 = import_zod22.z.object({
  email: import_zod22.z.string().email("Invalid email"),
  password: import_zod22.z.string().trim().min(1, "Password is required"),
  remember: import_zod22.z.enum(["on"]).optional(),
  role: import_zod22.z.preprocess(Number, import_zod22.z.number().int().min(1).max(4)),
  redirectTo: import_zod22.z.string().default("/")
}), RegisterUserSchema = import_zod22.z.object({
  name: import_zod22.z.string().min(1, "Name is required"),
  email: import_zod22.z.string().email("Invalid email"),
  password: import_zod22.z.string().trim().min(1, "Password is required"),
  confirmPassword: import_zod22.z.string().trim().min(1, "Password is required"),
  addressLine1: import_zod22.z.string().min(1, "Address Line 1 is required"),
  addressLine2: import_zod22.z.string().optional(),
  city: import_zod22.z.string().min(1, "City is required"),
  state: import_zod22.z.string().min(1, "State is required"),
  zipCode: import_zod22.z.string().min(1, "Zip Code is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["password", "confirmPassword"]
});

// app/routes/__auth/register.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), action13 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(
    request,
    RegisterUserSchema
  );
  if (fieldErrors)
    return badRequest6({ fieldErrors });
  let userResponse = await createUser({
    ...fields,
    role: 1 /* USER */
  });
  return userResponse.success ? createUserSession({
    request,
    userId: userResponse.data,
    role: 1 /* USER */,
    redirectTo: "/"
  }) : badRequest6({
    fieldErrors: {
      email: userResponse.message
    }
  });
};
function Register() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  let fetcher = (0, import_react20.useFetcher)(), isSubmitting = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900", children: "Register" }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: [
        "Have an account already?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_core32.Anchor, { component: import_react20.Link, to: "/login", size: "sm", prefetch: "intent", children: "Sign in" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 64,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 60,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(fetcher.Form, { replace: !0, method: "post", className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.TextInput,
        {
          name: "name",
          autoComplete: "given-name",
          label: "Name",
          error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 72,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.TextInput,
        {
          name: "email",
          type: "email",
          autoComplete: "email",
          label: "Email address",
          error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 80,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.PasswordInput,
        {
          name: "password",
          label: "Password",
          error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
          autoComplete: "current-password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 89,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.PasswordInput,
        {
          name: "confirmPassword",
          label: "Confirm password",
          error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.password,
          autoComplete: "current-password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 97,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.TextInput,
        {
          name: "addressLine1",
          label: "Address Line 1",
          error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine1,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 105,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.TextInput,
        {
          name: "addressLine2",
          label: "Address Line 2",
          error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.addressLine2
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 112,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_core32.TextInput,
          {
            name: "city",
            label: "City",
            error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.city,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 119,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_core32.Select,
          {
            data: UsStates_default.map((state) => ({
              label: state.name,
              value: state.name
            })),
            label: "State",
            placeholder: "Select a state",
            withinPortal: !0,
            name: "state",
            searchable: !0,
            clearable: !0,
            maxDropdownHeight: 200,
            error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.state,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 126,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 118,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.NumberInput,
        {
          name: "zipCode",
          label: "Zip Code",
          error: (_r = (_q = fetcher.data) == null ? void 0 : _q.fieldErrors) == null ? void 0 : _r.zipCode,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 143,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_core32.Button,
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
          lineNumber: 150,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 71,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 70,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 59,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action14,
  default: () => Login
});
var import_core33 = require("@mantine/core"), import_react21 = require("@remix-run/react"), import_lucide_react11 = require("lucide-react"), React12 = __toESM(require("react")), import_sonner8 = require("sonner");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), action14 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(request, LoginSchema2);
  if (fieldErrors)
    return badRequest6({ fieldErrors });
  let { email, password, redirectTo, remember, role } = fields, loginResponse = await verifyLogin({ email, password, role });
  return loginResponse.success ? createUserSession({
    request,
    userId: loginResponse.data,
    role,
    remember: remember === "on",
    redirectTo: safeRedirect(redirectTo)
  }) : badRequest6({
    fieldErrors: {
      password: loginResponse.message
    }
  });
};
function Login() {
  var _a, _b, _c, _d;
  let fetcher = (0, import_react21.useFetcher)(), isSubmitting = fetcher.state !== "idle", [searchParams, setSearchParams] = (0, import_react21.useSearchParams)(), [role, setRole] = React12.useState(1 /* USER */);
  return React12.useEffect(() => {
    let message = searchParams.get("message");
    message && (console.log("message", message), import_sonner8.toast.success(message), setSearchParams({}));
  }, [searchParams, setSearchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-col space-y-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "text-2xl font-semibold tracking-tight", children: "Welcome back!" }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-muted-foreground text-sm", children: "Enter your credentials below to continue" }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 72,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      fetcher.Form,
      {
        method: "post",
        className: "w-full rounded bg-white px-6 pb-8 pt-6 text-black",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_core33.SegmentedControl,
              {
                fullWidth: !0,
                name: "role",
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
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_core33.TextInput,
              {
                type: "email",
                name: "email",
                label: "Email",
                autoFocus: !0,
                placeholder: "Enter your email",
                error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.email,
                withAsterisk: !1,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 94,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_core33.PasswordInput,
              {
                name: "password",
                label: "Password",
                withAsterisk: !1,
                placeholder: "Enter your password",
                error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.password,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 105,
                columnNumber: 7
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 80,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "my-4 flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_react21.Link,
              {
                to: "/forgot-password",
                prefetch: "intent",
                className: "font-roboto text-sm font-medium text-blue-500 hover:underline",
                children: "Forgot password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 115,
                columnNumber: 7
              },
              this
            ),
            role === 1 /* USER */ && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              import_react21.Link,
              {
                to: "/register",
                prefetch: "intent",
                className: "font-roboto text-sm font-medium text-blue-500 hover:underline",
                children: "Register"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 124,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 114,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            import_core33.Button,
            {
              fullWidth: !0,
              type: "submit",
              loading: isSubmitting,
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_lucide_react11.LockIcon, { size: 16 }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              children: "Login"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 133,
              columnNumber: 6
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 76,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 67,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ROUTE: () => ROUTE2,
  default: () => AppLayout4,
  loader: () => loader13
});
var import_node23 = require("@remix-run/node"), import_react22 = require("@remix-run/react"), import_lucide_react12 = require("lucide-react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), ROUTE2 = "/admin", loader13 = async ({ request }) => (await requireUserId(request), await isStudent(request) ? (0, import_node23.redirect)("/student") : await isOrganizer(request) ? (0, import_node23.redirect)("/organizer") : (0, import_node23.json)({})), navMenu3 = [
  {
    title: "Manage",
    items: [
      {
        name: "Sports",
        href: `${ROUTE2}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_lucide_react12.LayoutDashboardIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      },
      {
        name: "Teams",
        href: `${ROUTE2}/teams`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_lucide_react12.LayoutDashboardIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      },
      {
        name: "Organizers",
        href: `${ROUTE2}/organizers`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_lucide_react12.UsersIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      },
      {
        name: "Students",
        href: `${ROUTE2}/students`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_lucide_react12.Users2Icon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      },
      {
        name: "Stadiums",
        href: `${ROUTE2}/stadiums`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_lucide_react12.BuildingIcon, { width: 18 }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }
    ]
  }
];
function AppLayout4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Nav, { menuItems: navMenu3 }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "min-h-screen bg-stone-50 sm:pl-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react22.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 69,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 65,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 64,
    columnNumber: 3
  }, this);
}

// app/routes/admin/organizers.tsx
var organizers_exports = {};
__export(organizers_exports, {
  action: () => action15,
  default: () => ManageOrganizers,
  loader: () => loader14
});
var import_solid6 = require("@heroicons/react/24/solid"), import_core34 = require("@mantine/core"), import_hooks8 = require("@mantine/hooks"), import_node24 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_lucide_react13 = require("lucide-react"), React13 = __toESM(require("react")), import_sonner9 = require("sonner"), import_zod25 = require("zod");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), AddOrganizerSchema = import_zod25.z.object({
  name: import_zod25.z.string().min(1, "Name is required"),
  email: import_zod25.z.string().email("Invalid email"),
  password: import_zod25.z.string().trim().min(1, "Password is required"),
  addressLine1: import_zod25.z.string().min(1, "Address Line 1 is required"),
  addressLine2: import_zod25.z.string().optional(),
  city: import_zod25.z.string().min(1, "City is required"),
  state: import_zod25.z.string().min(1, "State is required"),
  zipCode: import_zod25.z.string().min(1, "Zip Code is required")
}), loader14 = async () => {
  let usersResponse = await getAllUsers();
  if (!usersResponse.success)
    return (0, import_node24.json)({
      organizers: []
    });
  let organizers = usersResponse.data.filter(
    (user) => user.role === 2 /* ORGANIZER */
  );
  return (0, import_node24.json)({ organizers });
}, action15 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    AddOrganizerSchema
  );
  return fieldErrors ? badRequest6({ success: !1, fieldErrors }) : (await createUser({
    ...fields,
    role: 2 /* ORGANIZER */
  }), (0, import_node24.json)({
    success: !0,
    message: "Organizer created successfully"
  }));
};
function ManageOrganizers() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let fetcher = (0, import_react23.useFetcher)(), { organizers } = (0, import_react23.useLoaderData)(), [query, setQuery] = React13.useState(""), [isModalOpen, handleModal] = (0, import_hooks8.useDisclosure)(!1), { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    import_core34.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_lucide_react13.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 119,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_lucide_react13.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 121,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 111,
      columnNumber: 4
    },
    this
  ), isSubmitting = fetcher.state !== "idle";
  React13.useEffect(() => {
    var _a2;
    isSubmitting || (_a2 = fetcher.data) != null && _a2.success && (import_sonner9.toast.success(fetcher.data.message), handleModal.close());
  }, [fetcher.data, isSubmitting]);
  let filteredData = React13.useMemo(() => {
    let filteredData2 = organizers;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = organizers.filter(
        (organizer) => organizer.name.toLowerCase().includes(lowerCaseQuery) || organizer.email.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [organizers, query, sortParams.direction, sortParams.key]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(TailwindContainer, { className: "rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        PageHeading,
        {
          title: "Manage Organizers",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => handleModal.open(),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_solid6.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/admin/organizers.tsx",
                  lineNumber: 182,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "ml-2", children: "Add Organizer" }, void 0, !1, {
                  fileName: "app/routes/admin/organizers.tsx",
                  lineNumber: 183,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 177,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 174,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          import_core34.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 189,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core34.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_lucide_react13.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 197,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 196,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 188,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 212,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 208,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(SortableHeader, { label: "Email", sortKey: "email" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 219,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 215,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(SortableHeader, { label: "Status", sortKey: "isActive" }, void 0, !1, {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 226,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 222,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 229,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 206,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((organizer) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(OrganizerRow, { organizer }, organizer.id, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 237,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 235,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 204,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 203,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 202,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 173,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 172,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Organizer",
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "name",
              label: "Name",
              error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 255,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 262,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.PasswordInput,
            {
              name: "password",
              label: "Password",
              error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 270,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 277,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 284,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.TextInput,
              {
                name: "city",
                label: "City",
                error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 291,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 298,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 290,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.zipCode,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 315,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Button,
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
                lineNumber: 323,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Button,
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
                lineNumber: 331,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 322,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 254,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 253,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 247,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/organizers.tsx",
    lineNumber: 171,
    columnNumber: 3
  }, this);
}
function OrganizerRow({
  organizer
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  let fetcher = (0, import_react23.useFetcher)(), isSubmitting = fetcher.state !== "idle", [isModalOpen, handleModal] = (0, import_hooks8.useDisclosure)(!1);
  return React13.useEffect(() => {
    var _a2, _b2;
    isSubmitting || (_a2 = fetcher.data) != null && _a2.success && (import_sonner9.toast.success((_b2 = fetcher.data) == null ? void 0 : _b2.message), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: organizer.name }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 372,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: organizer.email }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 375,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        import_core34.Badge,
        {
          color: organizer.isActive ? "blue" : "red",
          variant: "light",
          radius: "xs",
          children: organizer.isActive ? "Active" : "Inactive"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 379,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 378,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        import_core34.Button,
        {
          loading: isSubmitting,
          variant: "subtle",
          loaderPosition: "right",
          onClick: () => {
            handleModal.open();
          },
          children: "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 388,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 387,
        columnNumber: 5
      }, this)
    ] }, organizer.id, !0, {
      fileName: "app/routes/admin/organizers.tsx",
      lineNumber: 371,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Edit Organizer",
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(fetcher.Form, { method: "post", replace: !0, action: "/api/edit-user", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("input", { hidden: !0, name: "userId", defaultValue: organizer.id }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 409,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("input", { hidden: !0, name: "role", defaultValue: 2 /* ORGANIZER */ }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 410,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "name",
              label: "Name",
              defaultValue: organizer.name,
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 412,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              defaultValue: organizer.email,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.email,
              readOnly: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 420,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.PasswordInput,
            {
              name: "password",
              label: "Password",
              placeholder: "Leave blank to keep the same password",
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.password
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 429,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.addressLine1,
              defaultValue: organizer.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 436,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              defaultValue: organizer.addressLine2,
              error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 444,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.TextInput,
              {
                name: "city",
                label: "City",
                defaultValue: organizer.city,
                error: (_m = (_l = fetcher.data) == null ? void 0 : _l.fieldErrors) == null ? void 0 : _m.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 452,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                defaultValue: organizer.state,
                error: (_o = (_n = fetcher.data) == null ? void 0 : _n.fieldErrors) == null ? void 0 : _o.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 460,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 451,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              error: (_q = (_p = fetcher.data) == null ? void 0 : _p.fieldErrors) == null ? void 0 : _q.zipCode,
              defaultValue: Number(organizer.zipCode),
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 478,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            import_core34.Switch,
            {
              name: "isActive",
              label: "Active",
              labelPosition: "left",
              defaultChecked: organizer.isActive
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/organizers.tsx",
              lineNumber: 486,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_core34.Divider, { my: 12 }, void 0, !1, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 493,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Button,
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
                lineNumber: 496,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              import_core34.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Update"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/organizers.tsx",
                lineNumber: 504,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/organizers.tsx",
            lineNumber: 495,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 408,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/organizers.tsx",
          lineNumber: 407,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/organizers.tsx",
        lineNumber: 401,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/organizers.tsx",
    lineNumber: 370,
    columnNumber: 3
  }, this);
}

// app/routes/admin/settings.tsx
var settings_exports3 = {};
__export(settings_exports3, {
  action: () => action16,
  default: () => ManageProfile3,
  meta: () => meta4
});
var import_core35 = require("@mantine/core"), import_node25 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), React14 = __toESM(require("react")), import_remix_utils8 = require("remix-utils"), import_sonner10 = require("sonner"), import_zod26 = require("zod");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "Manage Profile"
}), _UpdateUserSchema3 = UpdateUserSchema.extend({
  role: import_zod26.z.preprocess(Number, import_zod26.z.number().int().min(1).max(4))
}).omit({
  isActive: !0
});
async function action16({ request }) {
  let userId = await requireUserId(request), { fields, fieldErrors } = await validateAction(request, _UpdateUserSchema3);
  if (console.log(fields, fieldErrors), fieldErrors)
    return (0, import_remix_utils8.badRequest)({
      fieldErrors,
      success: !1
    });
  let updateUserResponse = await updateUser(userId, {
    ...fields,
    isActive: !0
  });
  return console.log(updateUserResponse), updateUserResponse.success ? (0, import_node25.json)({
    success: !0
  }) : (0, import_remix_utils8.badRequest)({
    success: !1
  });
}
function ManageProfile3() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let user = useUser(), fetcher = (0, import_react24.useFetcher)(), isSubmitting = fetcher.state !== "idle";
  return React14.useEffect(() => {
    isSubmitting || fetcher.data && (fetcher.data.success ? import_sonner10.toast.success("Profile updated") : import_sonner10.toast.error("Please try again"));
  }, [fetcher.data, isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex max-w-screen-xl flex-col space-y-12 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex flex-col space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(PageHeading, { title: "Settings" }, void 0, !1, {
      fileName: "app/routes/admin/settings.tsx",
      lineNumber: 86,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      fetcher.Form,
      {
        className: "flex flex-col gap-6 rounded-lg border border-stone-300 bg-stone-100 p-6",
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { hidden: !0, name: "role", defaultValue: user.role }, void 0, !1, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 92,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "font-cal text-xl", children: "Name" }, void 0, !1, {
              fileName: "app/routes/admin/settings.tsx",
              lineNumber: 94,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                className: "max-w-md",
                name: "name",
                defaultValue: user.name,
                error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 96,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "font-cal text-xl", children: "Email" }, void 0, !1, {
              fileName: "app/routes/admin/settings.tsx",
              lineNumber: 107,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                name: "email",
                type: "email",
                error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
                className: "max-w-md",
                description: "You cannot change your email address",
                defaultValue: user.email,
                readOnly: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 109,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 106,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "font-cal text-xl", children: "Password" }, void 0, !1, {
              fileName: "app/routes/admin/settings.tsx",
              lineNumber: 121,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.PasswordInput,
              {
                className: "max-w-md",
                name: "password",
                error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
                placeholder: "Leave blank to keep the same password",
                minLength: 8
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 123,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 120,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative flex flex-col gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "font-cal text-xl", children: "Address" }, void 0, !1, {
              fileName: "app/routes/admin/settings.tsx",
              lineNumber: 133,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                className: "max-w-md",
                name: "addressLine1",
                label: "Address Line 1",
                defaultValue: user.addressLine1,
                error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.name,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 135,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                className: "max-w-md",
                name: "addressLine2",
                label: "Address Line 2",
                defaultValue: user.addressLine2,
                error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine2,
                maxLength: 32
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 145,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                className: "max-w-md",
                name: "city",
                label: "City",
                defaultValue: user.city,
                error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.city,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 154,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                name: "state",
                label: "State",
                className: "max-w-md",
                defaultValue: user.state,
                placeholder: "Select a state",
                error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 164,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              import_core35.TextInput,
              {
                className: "max-w-md",
                name: "zipCode",
                label: "Zip Code",
                defaultValue: user.zipCode,
                error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.zipCode,
                maxLength: 32,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/settings.tsx",
                lineNumber: 178,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 132,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center justify-end border-t border-t-stone-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            import_core35.Button,
            {
              type: "submit",
              loading: isSubmitting,
              color: "dark",
              className: "mt-4",
              children: "Update"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/settings.tsx",
              lineNumber: 190,
              columnNumber: 8
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/settings.tsx",
            lineNumber: 189,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/admin/settings.tsx",
        lineNumber: 88,
        columnNumber: 6
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/settings.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/settings.tsx",
    lineNumber: 84,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/settings.tsx",
    lineNumber: 83,
    columnNumber: 3
  }, this);
}

// app/routes/admin/stadiums.tsx
var stadiums_exports = {};
__export(stadiums_exports, {
  action: () => action17,
  default: () => ManageStadium,
  loader: () => loader15
});
var import_solid7 = require("@heroicons/react/24/solid"), import_core36 = require("@mantine/core"), import_hooks10 = require("@mantine/hooks"), import_node26 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_lucide_react14 = require("lucide-react"), React15 = __toESM(require("react")), import_sonner11 = require("sonner"), import_zod27 = require("zod");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
var ManageStadiumSchema = import_zod27.z.object({
  stadiumId: import_zod27.z.string().optional(),
  name: import_zod27.z.string().min(1, "Name is required"),
  capacity: import_zod27.z.string().transform(Number),
  addressLine1: import_zod27.z.string().min(1, { message: "Address line 1 is required" }),
  addressLine2: import_zod27.z.string().optional(),
  city: import_zod27.z.string().min(1, { message: "City is required" }),
  state: import_zod27.z.string().min(1, { message: "State is required" }),
  zipCode: import_zod27.z.string().min(1, { message: "Zip is required" })
}), loader15 = async () => {
  let stadiumResponse = await getAllStadiums();
  if (!stadiumResponse.success)
    return (0, import_node26.json)({ stadiums: [] });
  let stadiums = stadiumResponse.data;
  return (0, import_node26.json)({ stadiums });
}, action17 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    ManageStadiumSchema
  );
  if (fieldErrors)
    return badRequest6({ success: !1, fieldErrors });
  let { stadiumId, ...rest } = fields;
  return stadiumId ? (await updateStadium(stadiumId, rest), (0, import_node26.json)({
    success: !0,
    message: "Stadium updated successfully"
  })) : (await createStadium({ ...rest }), (0, import_node26.json)({
    success: !0,
    message: "Stadium added successfully"
  }));
};
function ManageStadium() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  let fetcher = (0, import_react25.useFetcher)(), { stadiums } = (0, import_react25.useLoaderData)(), [query, setQuery] = React15.useState(""), { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    import_core36.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_lucide_react14.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 122,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_lucide_react14.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 124,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/stadiums.tsx",
      lineNumber: 114,
      columnNumber: 4
    },
    this
  ), [selectedStadium, setSelectedStadium] = React15.useState(null), [mode, setMode] = React15.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks10.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  React15.useEffect(() => {
    var _a2;
    fetcher.state === "idle" && (_a2 = fetcher.data) != null && _a2.success && (import_sonner11.toast.success(fetcher.data.message), setSelectedStadium(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state]);
  let filteredData = React15.useMemo(() => {
    let filteredData2 = stadiums;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = stadiums.filter(
        (s) => s.name.toLowerCase().includes(lowerCaseQuery) || s.addressLine1.toLowerCase().includes(lowerCaseQuery) || s.city.toLowerCase().includes(lowerCaseQuery) || s.state.toLowerCase().includes(lowerCaseQuery) || s.zipCode.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [query, sortParams.direction, sortParams.key, stadiums]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TailwindContainer, { className: "rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        PageHeading,
        {
          title: "Manage Stadiums",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => {
                setMode(1 /* add */), handleModal.open();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_solid7.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/admin/stadiums.tsx",
                  lineNumber: 197,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "ml-2", children: "Add Stadium" }, void 0, !1, {
                  fileName: "app/routes/admin/stadiums.tsx",
                  lineNumber: 198,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 189,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 186,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          import_core36.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 204,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_core36.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_lucide_react14.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 212,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 211,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 203,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 227,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 223,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                SortableHeader,
                {
                  label: "Address",
                  sortKey: "addressLine1"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin/stadiums.tsx",
                  lineNumber: 234,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 230,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SortableHeader, { label: "Capacity", sortKey: "capacity" }, void 0, !1, {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 244,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 240,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 247,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 221,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((stadium) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: stadium.name }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: [
            stadium.addressLine1,
            ", ",
            stadium == null ? void 0 : stadium.addressLine2,
            ",",
            " ",
            stadium.city,
            ", ",
            stadium.state,
            " - ",
            stadium.zipCode
          ] }, void 0, !0, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 259,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: stadium.capacity }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              compact: !0,
              loaderPosition: "right",
              onClick: () => {
                let _stadium = stadiums.find(
                  (s) => s.id === stadium.id
                );
                _stadium && (setSelectedStadium(_stadium), handleModal.open(), setMode(0 /* edit */));
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 268,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 267,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, stadium.id, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 255,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 253,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 219,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 218,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 217,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/stadiums.tsx",
      lineNumber: 185,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/stadiums.tsx",
      lineNumber: 184,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => {
          handleModal.close();
        },
        title: (0, import_core36.clsx)({
          "Edit Stadium": mode === 0 /* edit */,
          "Add Stadium": mode === 1 /* add */
        }),
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "hidden", name: "stadiumId", value: selectedStadium == null ? void 0 : selectedStadium.id }, void 0, !1, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 310,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.TextInput,
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
              lineNumber: 312,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.NumberInput,
            {
              name: "capacity",
              label: "Max Capacity",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.capacity,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.capacity,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 320,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.addressLine1,
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 328,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              defaultValue: selectedStadium == null ? void 0 : selectedStadium.addressLine2,
              error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 336,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_core36.TextInput,
              {
                name: "city",
                label: "City",
                defaultValue: selectedStadium == null ? void 0 : selectedStadium.city,
                error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 344,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_core36.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                defaultValue: selectedStadium == null ? void 0 : selectedStadium.state,
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                error: (_m = (_l = fetcher.data) == null ? void 0 : _l.fieldErrors) == null ? void 0 : _m.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/stadiums.tsx",
                lineNumber: 352,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 343,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_core36.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              defaultValue: selectedStadium != null && selectedStadium.zipCode ? Number(selectedStadium == null ? void 0 : selectedStadium.zipCode) : void 0,
              error: (_o = (_n = fetcher.data) == null ? void 0 : _n.fieldErrors) == null ? void 0 : _o.zipCode,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/stadiums.tsx",
              lineNumber: 370,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_core36.Button,
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
                lineNumber: 383,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              import_core36.Button,
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
                lineNumber: 394,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/stadiums.tsx",
            lineNumber: 382,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 309,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/stadiums.tsx",
          lineNumber: 308,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/stadiums.tsx",
        lineNumber: 297,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/stadiums.tsx",
    lineNumber: 183,
    columnNumber: 3
  }, this);
}

// app/routes/admin/students.tsx
var students_exports = {};
__export(students_exports, {
  action: () => action18,
  default: () => ManageStudents,
  loader: () => loader16
});
var import_solid8 = require("@heroicons/react/24/solid"), import_core37 = require("@mantine/core"), import_hooks11 = require("@mantine/hooks"), import_node27 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_lucide_react15 = require("lucide-react"), React16 = __toESM(require("react")), import_sonner12 = require("sonner"), import_zod28 = require("zod");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), AddStudentSchema = import_zod28.z.object({
  name: import_zod28.z.string().min(1, "Name is required"),
  email: import_zod28.z.string().email("Invalid email"),
  password: import_zod28.z.string().trim().min(1, "Password is required"),
  addressLine1: import_zod28.z.string().min(1, "Address Line 1 is required"),
  addressLine2: import_zod28.z.string().optional(),
  city: import_zod28.z.string().min(1, "City is required"),
  state: import_zod28.z.string().min(1, "State is required"),
  zipCode: import_zod28.z.string().min(1, "Zip Code is required")
}), loader16 = async () => {
  let usersResponse = await getAllUsers();
  if (!usersResponse.success)
    return (0, import_node27.json)({ students: [] });
  let students = usersResponse.data.filter(
    (user) => user.role === 1 /* USER */
  );
  return (0, import_node27.json)({ students });
}, action18 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, AddStudentSchema);
  return fieldErrors ? badRequest6({ success: !1, fieldErrors }) : (await createUser({
    ...fields,
    role: 1 /* USER */
  }), (0, import_node27.json)({
    success: !0,
    message: "Student created successfully"
  }));
};
function ManageStudents() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let fetcher = (0, import_react26.useFetcher)(), { students } = (0, import_react26.useLoaderData)(), [query, setQuery] = React16.useState(""), [isModalOpen, handleModal] = (0, import_hooks11.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  React16.useEffect(() => {
    var _a2;
    isSubmitting || (_a2 = fetcher.data) != null && _a2.success && (import_sonner12.toast.success(fetcher.data.message), handleModal.close());
  }, [fetcher.data, isSubmitting]);
  let { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_core37.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_lucide_react15.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 126,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_lucide_react15.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 128,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 133,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 118,
      columnNumber: 4
    },
    this
  ), filteredData = React16.useMemo(() => {
    let filteredData2 = students;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = students.filter(
        (s) => s.name.toLowerCase().includes(lowerCaseQuery) || s.email.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [query, sortParams.direction, sortParams.key, students]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(TailwindContainer, { className: "rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        PageHeading,
        {
          title: "Manage Students",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => handleModal.open(),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_solid8.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/admin/students.tsx",
                  lineNumber: 174,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "ml-2", children: "Add Student" }, void 0, !1, {
                  fileName: "app/routes/admin/students.tsx",
                  lineNumber: 175,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 169,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 166,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          import_core37.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 181,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core37.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_lucide_react15.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 189,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 188,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 180,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 204,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 200,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SortableHeader, { label: "Email", sortKey: "email" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 211,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 207,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SortableHeader, { label: "Status", sortKey: "isActive" }, void 0, !1, {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 218,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 214,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 221,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 198,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((student) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(StudentRow, { student }, student.id, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 229,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 227,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 196,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 195,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 194,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 165,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 164,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Student",
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "name",
              label: "Name",
              error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 247,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.email,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 254,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.PasswordInput,
            {
              name: "password",
              label: "Password",
              error: (_f = (_e = fetcher.data) == null ? void 0 : _e.fieldErrors) == null ? void 0 : _f.password,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 262,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              error: (_h = (_g = fetcher.data) == null ? void 0 : _g.fieldErrors) == null ? void 0 : _h.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 269,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              error: (_j = (_i = fetcher.data) == null ? void 0 : _i.fieldErrors) == null ? void 0 : _j.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 276,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.TextInput,
              {
                name: "city",
                label: "City",
                error: (_l = (_k = fetcher.data) == null ? void 0 : _k.fieldErrors) == null ? void 0 : _l.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 283,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                error: (_n = (_m = fetcher.data) == null ? void 0 : _m.fieldErrors) == null ? void 0 : _n.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 290,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 282,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              error: (_p = (_o = fetcher.data) == null ? void 0 : _o.fieldErrors) == null ? void 0 : _p.zipCode,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 307,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Button,
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
                lineNumber: 315,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Button,
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
                lineNumber: 323,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 314,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 246,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 245,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 239,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/students.tsx",
    lineNumber: 163,
    columnNumber: 3
  }, this);
}
function StudentRow({
  student
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  let fetcher = (0, import_react26.useFetcher)(), isSubmitting = fetcher.state !== "idle", [isModalOpen, handleModal] = (0, import_hooks11.useDisclosure)(!1);
  return React16.useEffect(() => {
    var _a2;
    isSubmitting || (_a2 = fetcher.data) != null && _a2.success && (import_sonner12.toast.success(fetcher.data.message), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: student.name }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 365,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: student.email }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 368,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        import_core37.Badge,
        {
          color: student.isActive ? "blue" : "red",
          variant: "light",
          radius: "xs",
          children: student.isActive ? "Active" : "Inactive"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 372,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 371,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        import_core37.Button,
        {
          loading: isSubmitting,
          variant: "subtle",
          loaderPosition: "right",
          onClick: () => {
            handleModal.open();
          },
          children: "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 381,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 380,
        columnNumber: 5
      }, this)
    ] }, student.id, !0, {
      fileName: "app/routes/admin/students.tsx",
      lineNumber: 364,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Edit Student",
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(fetcher.Form, { method: "post", replace: !0, action: "/api/edit-user", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("input", { hidden: !0, name: "userId", defaultValue: student.id }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 402,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("input", { hidden: !0, name: "role", defaultValue: 1 /* USER */ }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 403,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "name",
              label: "Name",
              defaultValue: student.name,
              error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 405,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "email",
              label: "Email",
              type: "email",
              defaultValue: student.email,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.email,
              readOnly: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 413,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.PasswordInput,
            {
              name: "password",
              label: "Password",
              placeholder: "Leave blank to keep the same password",
              error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.password
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 422,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "addressLine1",
              label: "Address Line 1",
              error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.addressLine1,
              defaultValue: student.addressLine1,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 429,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.TextInput,
            {
              name: "addressLine2",
              label: "Address Line 2",
              defaultValue: student.addressLine2,
              error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.addressLine2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 437,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.TextInput,
              {
                name: "city",
                label: "City",
                defaultValue: student.city,
                error: (_m = (_l = fetcher.data) == null ? void 0 : _l.fieldErrors) == null ? void 0 : _m.city,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 445,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Select,
              {
                data: UsStates_default.map((state) => ({
                  label: state.name,
                  value: state.name
                })),
                label: "State",
                placeholder: "Select a state",
                withinPortal: !0,
                name: "state",
                searchable: !0,
                clearable: !0,
                maxDropdownHeight: 200,
                defaultValue: student.state,
                error: (_o = (_n = fetcher.data) == null ? void 0 : _n.fieldErrors) == null ? void 0 : _o.state,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 453,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 444,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.NumberInput,
            {
              name: "zipCode",
              label: "Zip Code",
              error: (_q = (_p = fetcher.data) == null ? void 0 : _p.fieldErrors) == null ? void 0 : _q.zipCode,
              defaultValue: Number(student.zipCode),
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 471,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            import_core37.Switch,
            {
              name: "isActive",
              label: "Active",
              labelPosition: "left",
              defaultChecked: student.isActive
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/students.tsx",
              lineNumber: 479,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_core37.Divider, { my: 12 }, void 0, !1, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 486,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Button,
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
                lineNumber: 489,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
              import_core37.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Update"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/students.tsx",
                lineNumber: 497,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/students.tsx",
            lineNumber: 488,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 401,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/students.tsx",
          lineNumber: 400,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/students.tsx",
        lineNumber: 394,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/students.tsx",
    lineNumber: 363,
    columnNumber: 3
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  action: () => action19,
  default: () => ManageSports,
  loader: () => loader17
});
var import_solid9 = require("@heroicons/react/24/solid"), import_core38 = require("@mantine/core"), import_hooks12 = require("@mantine/hooks"), import_node28 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_lucide_react16 = require("lucide-react"), React17 = __toESM(require("react")), import_sonner13 = require("sonner"), import_zod29 = require("zod");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
var ManageSportSchema = import_zod29.z.object({
  sportId: import_zod29.z.string().optional(),
  name: import_zod29.z.string().min(1, "Name is required"),
  description: import_zod29.z.string().min(1, "Description is required")
}), loader17 = async () => {
  let sportsResponse = await getAllSports();
  if (!sportsResponse.success)
    return (0, import_node28.json)({ sports: [] });
  let sports = sportsResponse.data;
  return (0, import_node28.json)({ sports });
}, action19 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, ManageSportSchema);
  if (fieldErrors)
    return badRequest6({ success: !1, fieldErrors });
  let { sportId, ...rest } = fields;
  return sportId ? (await updateSport(sportId, rest), (0, import_node28.json)({
    success: !0,
    message: "Sport updated successfully"
  })) : (await createSport({ ...rest }), (0, import_node28.json)({
    success: !0,
    message: "Sport added successfully"
  }));
};
function ManageSports() {
  var _a, _b, _c, _d, _e;
  let fetcher = (0, import_react27.useFetcher)(), { sports } = (0, import_react27.useLoaderData)(), [query, setQuery] = React17.useState(""), [selectedSport, setSelectedSport] = React17.useState(
    null
  ), [mode, setMode] = React17.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks12.useDisclosure)(!1), { sortParams, toggleSort } = useSort("name"), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_core38.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_lucide_react16.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 105,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_lucide_react16.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 107,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 112,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 97,
      columnNumber: 4
    },
    this
  ), isSubmitting = fetcher.state !== "idle", filteredData = React17.useMemo(() => {
    let filteredData2 = sports;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = sports.filter(
        (sport) => sport.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [query, sortParams.direction, sortParams.key, sports]);
  return React17.useEffect(() => {
    var _a2;
    fetcher.state === "idle" && (_a2 = fetcher.data) != null && _a2.success && (import_sonner13.toast.success(fetcher.data.message), setSelectedSport(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TailwindContainer, { className: "rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        PageHeading,
        {
          title: "Manage Sports",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_core38.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => {
                setMode(1 /* add */), handleModal.open();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_solid9.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 167,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "ml-2", children: "Add Sport" }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 168,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 159,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 156,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          import_core38.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 174,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_core38.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_lucide_react16.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 182,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 181,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 173,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 193,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                SortableHeader,
                {
                  label: "Description",
                  sortKey: "description"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 204,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 200,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 210,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 191,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((sport) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: sport.name }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: sport.description }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_core38.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              loaderPosition: "right",
              onClick: () => {
                let _sport = sports.find(
                  (s) => s.id === sport.id
                );
                _sport && (setSelectedSport(_sport), handleModal.open(), setMode(0 /* edit */));
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 227,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 226,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        ] }, sport.id, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 218,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 216,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 189,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 188,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 187,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 155,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 154,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => {
          handleModal.close();
        },
        title: (0, import_core38.clsx)({
          "Edit Sport": mode === 0 /* edit */,
          "Add Sport": mode === 1 /* add */
        }),
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "hidden", name: "sportId", value: selectedSport == null ? void 0 : selectedSport.id }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 269,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_core38.TextInput,
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
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 271,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_core38.Textarea,
            {
              name: "description",
              label: "Description",
              defaultValue: selectedSport == null ? void 0 : selectedSport.description,
              error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.description,
              rows: 4,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 279,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              import_core38.Button,
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
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 289,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              import_core38.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add sport"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 300,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 288,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 268,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 267,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 256,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 153,
    columnNumber: 3
  }, this);
}

// app/routes/admin/teams.tsx
var teams_exports = {};
__export(teams_exports, {
  action: () => action20,
  default: () => ManageTeams,
  loader: () => loader18
});
var import_solid10 = require("@heroicons/react/24/solid"), import_core39 = require("@mantine/core"), import_hooks13 = require("@mantine/hooks"), import_node29 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), import_lucide_react17 = require("lucide-react"), React18 = __toESM(require("react")), import_sonner14 = require("sonner"), import_zod30 = require("zod");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
var ManageTeamSchema = import_zod30.z.object({
  teamId: import_zod30.z.string().optional(),
  name: import_zod30.z.string().min(1, "Name is required"),
  sportId: import_zod30.z.string().min(1, "Sport is required")
}), loader18 = async () => {
  let teamResponse = await getAllTeams(), sportsResponse = await getAllSports();
  if (!teamResponse.success || !sportsResponse.success)
    return (0, import_node29.json)({ teams: [], sports: [] });
  let teams = teamResponse.data, sports = sportsResponse.data;
  return (0, import_node29.json)({ teams, sports });
}, action20 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, ManageTeamSchema);
  if (fieldErrors)
    return badRequest6({ success: !1, fieldErrors });
  let { teamId, ...rest } = fields;
  return teamId ? (await updateTeam(teamId, rest), (0, import_node29.json)({
    success: !0,
    message: "Team updated successfully!"
  })) : (await createTeam({ ...rest }), (0, import_node29.json)({
    success: !0,
    message: "Team created successfully!"
  }));
};
function ManageTeams() {
  var _a, _b, _c, _d;
  let { teams, sports } = (0, import_react28.useLoaderData)(), fetcher = (0, import_react28.useFetcher)(), isSubmitting = fetcher.state !== "idle", [query, setQuery] = React18.useState(""), [selectedTeam, setSelectedTeam] = React18.useState(null), [mode, setMode] = React18.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks13.useDisclosure)(!1), { sortParams, toggleSort } = useSort("name");
  React18.useEffect(() => {
    isSubmitting || fetcher.data && fetcher.data.success && (import_sonner14.toast.success(fetcher.data.message), setSelectedTeam(null), handleModal.close());
  }, [fetcher.data, isSubmitting]);
  let filteredData = React18.useMemo(() => {
    let filteredData2 = teams;
    if (query) {
      let lowerCaseQuery = query.toLowerCase();
      filteredData2 = teams.filter(
        (team) => team.name.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filteredData2.sort((a, b) => sortParams.direction === "asc" ? a[sortParams.key] > b[sortParams.key] ? 1 : -1 : a[sortParams.key] < b[sortParams.key] ? 1 : -1), filteredData2;
  }, [query, sortParams.direction, sortParams.key, teams]), SortableHeader = ({
    label,
    sortKey
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    import_core39.Button,
    {
      variant: "white",
      compact: !0,
      bg: "transparent",
      onClick: () => toggleSort(sortKey),
      rightIcon: sortParams.key === sortKey ? sortParams.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_lucide_react17.ArrowUpIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 143,
        columnNumber: 8
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_lucide_react17.ArrowDownIcon, { size: 16 }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 145,
        columnNumber: 8
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { children: label }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 150,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/admin/teams.tsx",
      lineNumber: 135,
      columnNumber: 4
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TailwindContainer, { className: "rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        PageHeading,
        {
          title: "Manage Teams",
          rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core39.Button,
            {
              loading: isSubmitting,
              loaderPosition: "left",
              onClick: () => {
                setMode(1 /* add */), handleModal.open();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_solid10.PlusIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/admin/teams.tsx",
                  lineNumber: 170,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "ml-2", children: "Add Team" }, void 0, !1, {
                  fileName: "app/routes/admin/teams.tsx",
                  lineNumber: 171,
                  columnNumber: 9
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 162,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 159,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt-8 flex max-w-sm items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_core39.TextInput,
          {
            value: query,
            placeholder: "Enter your search query here",
            onChange: (e) => setQuery(e.target.value)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 177,
            columnNumber: 7
          },
          this
        ),
        query && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_core39.ActionIcon, { onClick: () => setQuery(""), size: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_lucide_react17.XIcon, { size: 20 }, void 0, !1, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 185,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 184,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 176,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SortableHeader, { label: "Name", sortKey: "name" }, void 0, !1, {
                fileName: "app/routes/admin/teams.tsx",
                lineNumber: 200,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 196,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SortableHeader, { label: "Sport", sortKey: "sport" }, void 0, !1, {
                fileName: "app/routes/admin/teams.tsx",
                lineNumber: 207,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 203,
              columnNumber: 12
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            "th",
            {
              scope: "col",
              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 209,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 194,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredData.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: team.name }, void 0, !1, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0", children: team.sport.name }, void 0, !1, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core39.Button,
            {
              loading: isSubmitting,
              variant: "subtle",
              loaderPosition: "right",
              onClick: () => {
                let _team = teams.find(
                  (t) => t.id === team.id
                );
                _team && (setSelectedTeam(_team), setMode(0 /* edit */), handleModal.open());
              },
              children: "Edit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 226,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 225,
            columnNumber: 14
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 224,
            columnNumber: 13
          }, this)
        ] }, team.id, !0, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 217,
          columnNumber: 12
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 215,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 192,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 191,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 190,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/teams.tsx",
      lineNumber: 158,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/teams.tsx",
      lineNumber: 157,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      CustomDrawer,
      {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: (0, import_core39.clsx)({
          "Edit Team": mode === 0 /* edit */,
          "Add Team": mode === 1 /* add */
        }),
        overlayProps: { blur: 1.2, opacity: 0.6 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(fetcher.Form, { method: "post", replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("fieldset", { disabled: isSubmitting, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "hidden", name: "teamId", value: selectedTeam == null ? void 0 : selectedTeam.id }, void 0, !1, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 266,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core39.TextInput,
            {
              name: "name",
              label: "Name",
              defaultValue: selectedTeam == null ? void 0 : selectedTeam.name,
              error: (_b = (_a = fetcher.data) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.name,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 268,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_core39.Select,
            {
              name: "sportId",
              label: "Sport",
              data: sports.map((sport) => ({
                value: sport.id,
                label: sport.name
              })),
              defaultValue: selectedTeam == null ? void 0 : selectedTeam.sport.id,
              error: (_d = (_c = fetcher.data) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.sportId,
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/teams.tsx",
              lineNumber: 276,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt-1 flex items-center justify-end gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_core39.Button,
              {
                variant: "subtle",
                disabled: isSubmitting,
                onClick: () => {
                  setSelectedTeam(null), handleModal.close();
                },
                color: "red",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/teams.tsx",
                lineNumber: 289,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_core39.Button,
              {
                type: "submit",
                loading: isSubmitting,
                loaderPosition: "right",
                children: mode === 0 /* edit */ ? "Save changes" : "Add team"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin/teams.tsx",
                lineNumber: 300,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin/teams.tsx",
            lineNumber: 288,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 265,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin/teams.tsx",
          lineNumber: 264,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/teams.tsx",
        lineNumber: 255,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/admin/teams.tsx",
    lineNumber: 156,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UZH7IGO3.js", imports: ["/build/_shared/chunk-P2VUGMQT.js", "/build/_shared/chunk-L2YE57Q6.js", "/build/_shared/chunk-73ULPEU7.js", "/build/_shared/chunk-HYDBX6IC.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AU7HK76J.js", imports: ["/build/_shared/chunk-N46T2B33.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-EJTVIJWW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/forgot-password": { id: "routes/__auth/forgot-password", parentId: "routes/__auth", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/forgot-password-EZ6UO5AS.js", imports: ["/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-GIPD62Y5.js", imports: ["/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-JN73553L.js", "/build/_shared/chunk-SN5CFNTG.js", "/build/_shared/chunk-T2ADK4GM.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/register": { id: "routes/__auth/register", parentId: "routes/__auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/register-6EXAGDQK.js", imports: ["/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-T2ADK4GM.js", "/build/_shared/chunk-WLTRNBV5.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student": { id: "routes/__student", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__student-UHQ3NRFX.js", imports: ["/build/_shared/chunk-KUA4J6ED.js", "/build/_shared/chunk-M4QH4Z3X.js", "/build/_shared/chunk-JN73553L.js", "/build/_shared/chunk-SN5CFNTG.js", "/build/_shared/chunk-T2ADK4GM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/general-events": { id: "routes/__student/general-events", parentId: "routes/__student", path: "general-events", index: void 0, caseSensitive: void 0, module: "/build/routes/__student/general-events-SD3547RG.js", imports: ["/build/_shared/chunk-ZFKIAC5L.js", "/build/_shared/chunk-2IF3M4A7.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/index": { id: "routes/__student/index", parentId: "routes/__student", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__student/index-XDPYO7GD.js", imports: ["/build/_shared/chunk-2BDIVVUM.js", "/build/_shared/chunk-ZFKIAC5L.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/my-events": { id: "routes/__student/my-events", parentId: "routes/__student", path: "my-events", index: void 0, caseSensitive: void 0, module: "/build/routes/__student/my-events-CKT66CRQ.js", imports: ["/build/_shared/chunk-2BDIVVUM.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-ZFKIAC5L.js", "/build/_shared/chunk-2IF3M4A7.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__student/settings": { id: "routes/__student/settings", parentId: "routes/__student", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/__student/settings-XZAA3BLW.js", imports: ["/build/_shared/chunk-ZWDKGA2H.js", "/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-NMBCAL2S.js", imports: ["/build/_shared/chunk-KUA4J6ED.js", "/build/_shared/chunk-M4QH4Z3X.js", "/build/_shared/chunk-JN73553L.js", "/build/_shared/chunk-SN5CFNTG.js", "/build/_shared/chunk-T2ADK4GM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-32S64LRL.js", imports: ["/build/_shared/chunk-U7L3JFLG.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/organizers": { id: "routes/admin/organizers", parentId: "routes/admin", path: "organizers", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/organizers-BV7SKY6P.js", imports: ["/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/settings": { id: "routes/admin/settings", parentId: "routes/admin", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/settings-WWIQN4ZC.js", imports: ["/build/_shared/chunk-ZWDKGA2H.js", "/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/stadiums": { id: "routes/admin/stadiums", parentId: "routes/admin", path: "stadiums", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/stadiums-HGQC2M4C.js", imports: ["/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-XFXK42DY.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/students": { id: "routes/admin/students", parentId: "routes/admin", path: "students", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/students-2J6Z4LPB.js", imports: ["/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/teams": { id: "routes/admin/teams", parentId: "routes/admin", path: "teams", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/teams-FD27F7P7.js", imports: ["/build/_shared/chunk-LW2AIAQL.js", "/build/_shared/chunk-U7L3JFLG.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/logout": { id: "routes/api/auth/logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/logout-VRZV7HI2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/cancel-event": { id: "routes/api/cancel-event", parentId: "root", path: "api/cancel-event", index: void 0, caseSensitive: void 0, module: "/build/routes/api/cancel-event-KJASCBDA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/cancel-general-event": { id: "routes/api/cancel-general-event", parentId: "root", path: "api/cancel-general-event", index: void 0, caseSensitive: void 0, module: "/build/routes/api/cancel-general-event-BAIY7MHF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/cancel-general-reservation": { id: "routes/api/cancel-general-reservation", parentId: "root", path: "api/cancel-general-reservation", index: void 0, caseSensitive: void 0, module: "/build/routes/api/cancel-general-reservation-WBLJ4UGY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/cancel-reservation": { id: "routes/api/cancel-reservation", parentId: "root", path: "api/cancel-reservation", index: void 0, caseSensitive: void 0, module: "/build/routes/api/cancel-reservation-QKKGDQTW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/edit-user": { id: "routes/api/edit-user", parentId: "root", path: "api/edit-user", index: void 0, caseSensitive: void 0, module: "/build/routes/api/edit-user-SDLMNT6C.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer": { id: "routes/organizer", parentId: "root", path: "organizer", index: void 0, caseSensitive: void 0, module: "/build/routes/organizer-KTWG3T2M.js", imports: ["/build/_shared/chunk-KUA4J6ED.js", "/build/_shared/chunk-M4QH4Z3X.js", "/build/_shared/chunk-JN73553L.js", "/build/_shared/chunk-SN5CFNTG.js", "/build/_shared/chunk-T2ADK4GM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer/general-events": { id: "routes/organizer/general-events", parentId: "routes/organizer", path: "general-events", index: void 0, caseSensitive: void 0, module: "/build/routes/organizer/general-events-MVKM427R.js", imports: ["/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-ONQ57EE4.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-2IF3M4A7.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer/index": { id: "routes/organizer/index", parentId: "routes/organizer", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/organizer/index-BF4IKBZI.js", imports: ["/build/_shared/chunk-XFXK42DY.js", "/build/_shared/chunk-LW2AIAQL.js", "/build/_shared/chunk-U7L3JFLG.js", "/build/_shared/chunk-2BDIVVUM.js", "/build/_shared/chunk-ONQ57EE4.js", "/build/_shared/chunk-FDWCSOD5.js", "/build/_shared/chunk-X6OOYBVA.js", "/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/organizer/settings": { id: "routes/organizer/settings", parentId: "routes/organizer", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/organizer/settings-5446EIGN.js", imports: ["/build/_shared/chunk-ZWDKGA2H.js", "/build/_shared/chunk-ZRXXZ3YS.js", "/build/_shared/chunk-GZ5ZIZ2A.js", "/build/_shared/chunk-YSJMGTXM.js", "/build/_shared/chunk-4ZZ7VOIV.js", "/build/_shared/chunk-Z2AOP3SC.js", "/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/super-admin": { id: "routes/super-admin", parentId: "root", path: "super-admin", index: void 0, caseSensitive: void 0, module: "/build/routes/super-admin-5OPJSHQU.js", imports: ["/build/_shared/chunk-N73A4IQH.js", "/build/_shared/chunk-QDAGSSPC.js", "/build/_shared/chunk-M4QH4Z3X.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/super-admin/index": { id: "routes/super-admin/index", parentId: "routes/super-admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/super-admin/index-LBVQDAUA.js", imports: ["/build/_shared/chunk-WLTRNBV5.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "946a8ac1", hmr: void 0, url: "/build/manifest-946A8AC1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !0, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/cancel-general-reservation": {
    id: "routes/api/cancel-general-reservation",
    parentId: "root",
    path: "api/cancel-general-reservation",
    index: void 0,
    caseSensitive: void 0,
    module: cancel_general_reservation_exports
  },
  "routes/api/cancel-general-event": {
    id: "routes/api/cancel-general-event",
    parentId: "root",
    path: "api/cancel-general-event",
    index: void 0,
    caseSensitive: void 0,
    module: cancel_general_event_exports
  },
  "routes/api/cancel-reservation": {
    id: "routes/api/cancel-reservation",
    parentId: "root",
    path: "api/cancel-reservation",
    index: void 0,
    caseSensitive: void 0,
    module: cancel_reservation_exports
  },
  "routes/api/cancel-event": {
    id: "routes/api/cancel-event",
    parentId: "root",
    path: "api/cancel-event",
    index: void 0,
    caseSensitive: void 0,
    module: cancel_event_exports
  },
  "routes/api/auth/logout": {
    id: "routes/api/auth/logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/api/edit-user": {
    id: "routes/api/edit-user",
    parentId: "root",
    path: "api/edit-user",
    index: void 0,
    caseSensitive: void 0,
    module: edit_user_exports
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
  "routes/organizer/general-events": {
    id: "routes/organizer/general-events",
    parentId: "routes/organizer",
    path: "general-events",
    index: void 0,
    caseSensitive: void 0,
    module: general_events_exports
  },
  "routes/organizer/settings": {
    id: "routes/organizer/settings",
    parentId: "routes/organizer",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
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
  "routes/__student/general-events": {
    id: "routes/__student/general-events",
    parentId: "routes/__student",
    path: "general-events",
    index: void 0,
    caseSensitive: void 0,
    module: general_events_exports2
  },
  "routes/__student/my-events": {
    id: "routes/__student/my-events",
    parentId: "routes/__student",
    path: "my-events",
    index: void 0,
    caseSensitive: void 0,
    module: my_events_exports
  },
  "routes/__student/settings": {
    id: "routes/__student/settings",
    parentId: "routes/__student",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports2
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
  "routes/__auth/forgot-password": {
    id: "routes/__auth/forgot-password",
    parentId: "routes/__auth",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
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
  "routes/admin/settings": {
    id: "routes/admin/settings",
    parentId: "routes/admin",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports3
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
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/teams": {
    id: "routes/admin/teams",
    parentId: "routes/admin",
    path: "teams",
    index: void 0,
    caseSensitive: void 0,
    module: teams_exports
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

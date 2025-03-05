declare global {
  namespace PantographTypes {
    export type ResourceType = Record<string, unknown> | Record<string, never>
    export type RedirectType = Record<string, ResourceType> | Record<string, never>

    export interface ActionType {
      type?: string
    }

    export type StateType = Record<string, { redirect?: RedirectType }> | Record<string, never>

    export interface RouteType {
      pathname?: string
    }

    export interface RedirectToAlphaParams {
      alpha: ResourceType
      route: RouteType
    }

    export interface RedirectToOmegaParams {
      alpha: ResourceType
      omega: ResourceType
      route: RouteType
    }

    export interface RedirectToEmbarkParams {
      embark: ResourceType
      route: RouteType
    }

    export interface RedirectToDebarkParams {
      debark: ResourceType
      route: RouteType
    }

    export interface RedirectToConfirmParams {
      confirm: ResourceType
      route: RouteType
    }

    export interface RedirectToParams {
      redirect?: RedirectType
      route: RouteType
    }

    export interface RedirectFromAlphaParams {
      state: StateType
      route: RouteType
    }

    export interface RedirectFromOmegaParams {
      state: StateType
      route: RouteType
    }

    export interface RedirectFromEmbarkParams {
      state: StateType
      route: RouteType
    }

    export interface RedirectFromDebarkParams {
      state: StateType
      route: RouteType
    }

    export interface RedirectFromConfirmParams {
      state: StateType
      route: RouteType
    }

    export interface GraphiteParams {
      action: ActionType
      state: StateType
      route: RouteType
    }

    export namespace Pantograph {
      export interface AlphaType {
        ERROR: string
        ROUTE: string
        MOUNT: string
        FETCH: string
        STORE: string
        QUERY: string
        CHANGE: string
        SUBMIT: string
      }

      export interface OmegaType {
        ERROR: string
        ROUTE: string
        MOUNT: string
        FETCH: string
        STORE: string
        QUERY: string
        CHANGE: string
        SUBMIT: string
      }

      export interface EmbarkType {
        ERROR: string
        ROUTE: string
        MOUNT: string
        FETCH: string
        STORE: string
        CHANGE: string
        SUBMIT: string
      }

      export interface DebarkType {
        ERROR: string
        ROUTE: string
        MOUNT: string
        FETCH: string
        STORE: string
        CHANGE: string
        SUBMIT: string
      }

      export interface ConfirmType {
        ERROR: string
        ROUTE: string
        MOUNT: string
        FETCH: string
        STORE: string
        CHANGE: string
        SUBMIT: string
      }

      export interface PantographType {
        ALPHA: AlphaType
        OMEGA: OmegaType
        EMBARK: EmbarkType
        DEBARK: DebarkType
        CONFIRM: ConfirmType
      }
    }
  }
}

export {}

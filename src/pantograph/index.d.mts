declare module 'shinkansen-pantograph/pantograph' {
  import type React from 'react'

  interface RouteType {
    pathname: string
  }

  const pantograph: Record<string, Record<string, string>>

  export function getRedirectToAlpha (alpha: { alpha: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectToOmega (omega: { omega: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectToEmbark (embark: { embark: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectToDebark (debark: { debark: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectToConfirm (confirm: { confirm: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectTo (to: { redirect?: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectFromAlpha (alpha: { state: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectFromOmega (omega: { state: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectFromEmbark (embark: { state: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function getRedirectFromDebark (debark: { state: Record<string, unknown>, route: string }): React.JSX.Element | null
  export function getRedirectFromConfirm (confirm: { state: Record<string, unknown>, route: RouteType }): React.JSX.Element | null
  export function graphite (params: { action: Record<string, unknown>, state: Record<string, unknown>, route: RouteType }): undefined

  export default pantograph
}

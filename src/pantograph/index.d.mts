export type RedirectToAlphaParams = PantographTypes.RedirectToAlphaParams
export type RedirectToOmegaParams = PantographTypes.RedirectToOmegaParams
export type RedirectToEmbarkParams = PantographTypes.RedirectToEmbarkParams
export type RedirectToDebarkParams = PantographTypes.RedirectToDebarkParams
export type RedirectToConfirmParams = PantographTypes.RedirectToConfirmParams
export type RedirectToParams = PantographTypes.RedirectToParams
export type RedirectFromAlphaParams = PantographTypes.RedirectFromAlphaParams
export type RedirectFromOmegaParams = PantographTypes.RedirectFromOmegaParams
export type RedirectFromEmbarkParams = PantographTypes.RedirectFromEmbarkParams
export type RedirectFromDebarkParams = PantographTypes.RedirectFromDebarkParams
export type RedirectFromConfirmParams = PantographTypes.RedirectFromConfirmParams
export type GraphiteParams = PantographTypes.GraphiteParams

declare const pantograph: Record<string, Record<string, string>>

export function getRedirectToAlpha (alpha: RedirectToAlphaParams): string | undefined
export function getRedirectToOmega (omega: RedirectToOmegaParams): string | undefined
export function getRedirectToEmbark (embark: RedirectToEmbarkParams): string | undefined
export function getRedirectToDebark (debark: RedirectToDebarkParams): string | undefined
export function getRedirectToConfirm (confirm: RedirectToConfirmParams): string | undefined
export function getRedirectTo (to: RedirectToParams): string | undefined
export function getRedirectFromAlpha (alpha: RedirectFromAlphaParams): string | undefined
export function getRedirectFromOmega (omega: RedirectFromOmegaParams): string | undefined
export function getRedirectFromEmbark (embark: RedirectFromEmbarkParams): string | undefined
export function getRedirectFromDebark (debark: RedirectFromDebarkParams): string | undefined
export function getRedirectFromConfirm (confirm: RedirectFromConfirmParams): string | undefined
export function graphite (params: GraphiteParams): string | undefined

export default pantograph

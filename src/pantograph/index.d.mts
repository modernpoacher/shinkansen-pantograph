import '#pantograph/pantograph/pantograph'

type RedirectToAlphaParams = PantographTypes.RedirectToAlphaParams
type RedirectToOmegaParams = PantographTypes.RedirectToOmegaParams
type RedirectToEmbarkParams = PantographTypes.RedirectToEmbarkParams
type RedirectToDebarkParams = PantographTypes.RedirectToDebarkParams
type RedirectToConfirmParams = PantographTypes.RedirectToConfirmParams
type RedirectToParams = PantographTypes.RedirectToParams

type RedirectFromAlphaParams = PantographTypes.RedirectFromAlphaParams
type RedirectFromOmegaParams = PantographTypes.RedirectFromOmegaParams
type RedirectFromEmbarkParams = PantographTypes.RedirectFromEmbarkParams
type RedirectFromDebarkParams = PantographTypes.RedirectFromDebarkParams
type RedirectFromConfirmParams = PantographTypes.RedirectFromConfirmParams
type GraphiteParams = PantographTypes.GraphiteParams

type PantographType = PantographTypes.Pantograph.PantographType

export function getRedirectToAlpha (params: RedirectToAlphaParams): string | undefined
export function getRedirectToOmega (params: RedirectToOmegaParams): string | undefined
export function getRedirectToEmbark (params: RedirectToEmbarkParams): string | undefined
export function getRedirectToDebark (params: RedirectToDebarkParams): string | undefined
export function getRedirectToConfirm (params: RedirectToConfirmParams): string | undefined
export function getRedirectTo (params: RedirectToParams): string | undefined
export function getRedirectFromAlpha (params: RedirectFromAlphaParams): string | undefined
export function getRedirectFromOmega (params: RedirectFromOmegaParams): string | undefined
export function getRedirectFromEmbark (params: RedirectFromEmbarkParams): string | undefined
export function getRedirectFromDebark (params: RedirectFromDebarkParams): string | undefined
export function getRedirectFromConfirm (params: RedirectFromConfirmParams): string | undefined
export function graphite (params: GraphiteParams) : string | undefined

declare const Pantograph: PantographType

export default Pantograph

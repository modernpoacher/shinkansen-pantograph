## `shinkansen-pantograph`

# Pantograph

*Pantograph* implements *React* + *Redux* + *React Router* navigation behaviour for *Zashiki Karakuri*.

## Usage

```javascript
import {
  Pantograph
} from 'shinkansen-pantograph'
```

```javascript
import Pantograph, {
  getRedirectToAlpha,
  getRedirectToOmega,
  getRedirectToEmbark,
  getRedirectToDebark,
  getRedirectToConfirm,
  getRedirectFromAlpha,
  getRedirectFromOmega,
  getRedirectFromEmbark,
  getRedirectFromDebark,
  getRedirectFromConfirm,
  getRedirectTo,
  graphite
} from 'shinkansen-pantograph/pantograph'
```

*Pantograph* exposes constants to be used by *Redux* actions and reducers and the method `graphite` to resolve *React Router* paths from *Zashiki* route resource objects.

## See also

- [Gears](https://github.com/modernpoacher/shinkansen-gears)

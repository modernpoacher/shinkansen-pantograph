## `shinkansen-pantograph`

# Pantograph

*Pantograph* implements *React* + *Redux* + *React Router* navigation behaviour for *Zashiki Karakuri*.

## Usage

```javascript
import {
  Pantograph
} from 'shinkansen-pantograph'
```

*Pantograph* exposes constants to be used by *Redux* actions and reducers, and the method `graphite` to raise *React Router* navigation events in middleware.

```javascript
export class Pantograph {
  static ALPHA
  static OMEGA
  static EMBARK
  static DEBARK
  static CONFIRM
  static graphite () { }
}
```

## See also

- [Gears](https://github.com/modernpoacher/shinkansen-gears)

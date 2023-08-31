import Model from './model.js';
import points from '../data/point.json';
import destinations from '../data/destination.json';
import offerGroups from '../data/offers.json';
import PointModel from './point-model.js';
class AppModel extends Model {
  constructor() {
    super();

    /**
     * @type{Array<Point>}
     */
    this.points = [];

    /**
     * @type{Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type{Array<OfferGroup>}
     */
    this.offerGroups = [];
  }

  /**
  * @returns {Promise<void>}
  */

  async ready() {
    //TODO: предстоит получать данные с сервера
    // @ts-ignore
    this.points = points;// @ts-ignore
    this.destinations = destinations;
    // @ts-ignore
    this.offerGroups = offerGroups;

  }

  /**
  * @returns{Array<PointModel>}
  */
  getPoints() {
    return this.points.map(this.createPoint);
  }

  /**
   *@param{Point} data
   * @returns{PointModel}
   */
  createPoint(data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
  * @returns{Array<Destination>}
  */
  getDestinations() {
    return structuredClone(this.destinations);
  }

  /**
  * @returns{Array<OfferGroup>}
  */
  getOfferGroups() {
    return structuredClone(this.offerGroups);
  }
}

export default AppModel;

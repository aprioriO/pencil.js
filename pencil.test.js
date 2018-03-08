/* global test expect */

/* eslint-disable import/no-duplicates */
import Pencil from "./pencil";
import {
    BaseEvent, MouseEvent, KeyboardEvent, Position, Vector, Line, Spline, EventEmitter, Container, Scene,
    Component, Polygon, RegularPolygon, Star, Rectangle, Square, Arc, Circle, Text, Slider,
} from "./pencil";
/* eslint-enable */

test("Pencil namespace", () => {
    /* eslint-disable import/no-named-as-default-member */
    expect(Pencil.BaseEvent).toBeDefined();
    expect(Pencil.MouseEvent).toBeDefined();
    expect(Pencil.KeyboardEvent).toBeDefined();
    expect(Pencil.Position).toBeDefined();
    expect(Pencil.Vector).toBeDefined();
    expect(Pencil.Line).toBeDefined();
    expect(Pencil.Spline).toBeDefined();
    expect(Pencil.EventEmitter).toBeDefined();
    expect(Pencil.Container).toBeDefined();
    expect(Pencil.Scene).toBeDefined();
    expect(Pencil.Component).toBeDefined();
    expect(Pencil.Polygon).toBeDefined();
    expect(Pencil.RegularPolygon).toBeDefined();
    expect(Pencil.Star).toBeDefined();
    expect(Pencil.Rectangle).toBeDefined();
    expect(Pencil.Square).toBeDefined();
    expect(Pencil.Arc).toBeDefined();
    expect(Pencil.Circle).toBeDefined();
    expect(Pencil.Text).toBeDefined();
    expect(Pencil.Slider).toBeDefined();
    /* eslint-enable */
});

test("Named imports", () => {
    expect(BaseEvent).toBeDefined();
    expect(MouseEvent).toBeDefined();
    expect(KeyboardEvent).toBeDefined();
    expect(Position).toBeDefined();
    expect(Vector).toBeDefined();
    expect(Line).toBeDefined();
    expect(Spline).toBeDefined();
    expect(EventEmitter).toBeDefined();
    expect(Container).toBeDefined();
    expect(Scene).toBeDefined();
    expect(Component).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(RegularPolygon).toBeDefined();
    expect(Star).toBeDefined();
    expect(Rectangle).toBeDefined();
    expect(Square).toBeDefined();
    expect(Arc).toBeDefined();
    expect(Circle).toBeDefined();
    expect(Text).toBeDefined();
    expect(Slider).toBeDefined();
});

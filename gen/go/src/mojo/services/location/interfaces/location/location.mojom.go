// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/services/location/interfaces/location.mojom
//

package location

import (
	sort "sort"
	fmt "fmt"
	bindings "mojo/public/go/bindings"
)


type Location struct {
	Time uint64
	HasElapsedRealTimeNanos bool
	ElapsedRealTimeNanos uint64
	Latitude float64
	Longitude float64
	HasAltitude bool
	Altitude float64
	HasSpeed bool
	Speed float32
	HasBearing bool
	Bearing float32
	HasAccuracy bool
	Accuracy float32
}


func (s *Location) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(56, 0)
	if err := encoder.WriteUint64(s.Time); err != nil {
		return err
	}
	if err := encoder.WriteBool(s.HasElapsedRealTimeNanos); err != nil {
		return err
	}
	if err := encoder.WriteBool(s.HasAltitude); err != nil {
		return err
	}
	if err := encoder.WriteBool(s.HasSpeed); err != nil {
		return err
	}
	if err := encoder.WriteBool(s.HasBearing); err != nil {
		return err
	}
	if err := encoder.WriteBool(s.HasAccuracy); err != nil {
		return err
	}
	if err := encoder.WriteFloat32(s.Speed); err != nil {
		return err
	}
	if err := encoder.WriteUint64(s.ElapsedRealTimeNanos); err != nil {
		return err
	}
	if err := encoder.WriteFloat64(s.Latitude); err != nil {
		return err
	}
	if err := encoder.WriteFloat64(s.Longitude); err != nil {
		return err
	}
	if err := encoder.WriteFloat64(s.Altitude); err != nil {
		return err
	}
	if err := encoder.WriteFloat32(s.Bearing); err != nil {
		return err
	}
	if err := encoder.WriteFloat32(s.Accuracy); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var location_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{64, 0},
}

func (s *Location) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(location_Versions), func(i int) bool {
		return location_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(location_Versions) {
		if location_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := location_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadUint64()
		if err != nil {
			return err
		}
		s.Time = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.HasElapsedRealTimeNanos = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.HasAltitude = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.HasSpeed = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.HasBearing = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.HasAccuracy = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat32()
		if err != nil {
			return err
		}
		s.Speed = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadUint64()
		if err != nil {
			return err
		}
		s.ElapsedRealTimeNanos = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat64()
		if err != nil {
			return err
		}
		s.Latitude = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat64()
		if err != nil {
			return err
		}
		s.Longitude = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat64()
		if err != nil {
			return err
		}
		s.Altitude = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat32()
		if err != nil {
			return err
		}
		s.Bearing = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadFloat32()
		if err != nil {
			return err
		}
		s.Accuracy = value0
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}
